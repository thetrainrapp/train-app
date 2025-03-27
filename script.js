<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings | TrainR</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="sidebar">
        <h1>TrainR</h1>
        <a href="dashboard.html" class="nav-link">Dashboard</a>
        <a href="meal-planner.html" class="nav-link">Meal Planner</a>
        <a href="favorites.html" class="nav-link">Favorites</a>
        <a href="log.html" class="nav-link">Log</a>
        <a href="preferences.html" class="nav-link">Preferences</a>
        <a href="profile.html" class="nav-link">Profile</a>
        <a href="logout.html" class="nav-link">Logout</a>
    </div>

    <div class="main-content">
        <header>
            <a href="dashboard.html">Back to Dashboard</a>
            <h2>Account Settings</h2>
        </header>

        <div class="card">
            <h3>Account Settings</h3>
            <form>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
                
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
                
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required>

                <label for="theme-color">Theme Color</label>
                <input type="color" id="theme-color" name="theme-color" value="#1995AD">
                
                <button type="submit">Save Changes</button>
            </form>
        </div>

        <div class="card">
            <h3>Notification Preferences</h3>
            <form>
                <label for="email-notifications">Email Notifications</label>
                <input type="checkbox" id="email-notifications" name="email-notifications">
                
                <label for="sms-notifications">SMS Notifications</label>
                <input type="checkbox" id="sms-notifications" name="sms-notifications">
                
                <button type="submit">Save Notification Settings</button>
            </form>
        </div>

        <div class="card">
            <h3>Account Deactivation</h3>
            <p>If you wish to deactivate your account, please click the button below.</p>
            <button class="deactivate-btn">Deactivate Account</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>