import json
import pyautogui
import pytesseract
from PIL import Image
import schedule
import time
from datetime import datetime
import pygetwindow as gw

# Set Tesseract executable path
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Initialize variables to track active window and duration
last_active_app = None
last_timestamp = None
current_duration = 0


# Function to detect the active window/application
def get_active_window():
    active_window = gw.getActiveWindow()
    if active_window:
        return active_window.title
    return "Unknown App"


# Function to capture the screen
def capture_screen():
    screenshot = pyautogui.screenshot()
    screenshot.save("screen.png")
    print("Screen captured and saved as screen.png")


# Function to extract text from the screenshot
def extract_text():
    image = Image.open("screen.png")
    text = pytesseract.image_to_string(image)
    print("Text extracted from screen:", text)
    return text


# Function to filter relevant content (e.g., YouTube video titles, Instagram posts)
def filter_screen_content(screen_content):
    if "youtube.com" in screen_content.lower():
        lines = screen_content.split("\n")
        for line in lines:
            if "views" in line.lower() and "ago" in line.lower():
                # Likely the title of the currently playing video
                return line.strip()
        return "YouTube - Active Video Unknown"
    elif "instagram" in screen_content.lower():
        return "Instagram - Active Post"
    elif "linkedin" in screen_content.lower():
        return "LinkedIn - Active Feed"
    else:
        return "Unfiltered Content"


# Function to categorize content based on keywords
def categorize_content(screen_content):
    categories = {
        "Entertainment": ["movie", "song", "show", "funny", "music", "video"],
        "Motivational": ["success", "goal", "inspirational", "motivational"],
        "Knowledge": ["tutorial", "learning", "educational", "documentary"],
        "Sensitive": ["violence", "controversial", "disturbing"],
        "Social Media": ["Instagram", "LinkedIn", "WhatsApp"]
    }

    for category, keywords in categories.items():
        if any(keyword.lower() in screen_content.lower() for keyword in keywords):
            return category
    return "Uncategorized"


# Function to save data to JSON
def save_data_to_json(data):
    try:
        with open("screen_data.json", "r") as file:
            if file.read().strip():
                file.seek(0)
                existing_data = json.load(file)
            else:
                existing_data = []
    except FileNotFoundError:
        existing_data = []

    existing_data.append(data)

    with open("screen_data.json", "w") as file:
        json.dump(existing_data, file, indent=4)
    print("Data saved to screen_data.json")


# Function to track and save user activity
def capture_and_save():
    global last_active_app, last_timestamp, current_duration

    # Detect the current active application
    active_app = get_active_window()
    current_time = datetime.now()

    if last_active_app == active_app:
        # If the active app hasn't changed, update the duration
        elapsed_time = (current_time - last_timestamp).seconds
        current_duration += elapsed_time
    else:
        # If the active app has changed, save the previous session data
        if last_active_app is not None:
            data = {
                "timestamp": last_timestamp.isoformat(),
                "active_app": last_active_app,
                "screen_content": "Unknown or Inactive Content",
                "duration": current_duration,
                "category": "Uncategorized"
            }
            save_data_to_json(data)

        # Reset duration for the new active app
        current_duration = 0

    # Capture screen and extract text
    capture_screen()
    raw_screen_content = extract_text()
    filtered_content = filter_screen_content(raw_screen_content)

    # Organize data
    data = {
        "timestamp": current_time.isoformat(),
        "active_app": active_app,
        "screen_content": filtered_content,
        "duration": current_duration,
        "category": categorize_content(filtered_content)
    }

    # Save the organized data to JSON
    save_data_to_json(data)

    # Update the last_active_app and last_timestamp for tracking
    last_active_app = active_app
    last_timestamp = current_time


# Schedule the process to run every 10 seconds
schedule.every(10).seconds.do(capture_and_save)

# Run the scheduled tasks
while True:
    schedule.run_pending()
    time.sleep(1)
