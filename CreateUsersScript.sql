-- Create the UserDatabase database if it does not exist
IF NOT EXISTS (SELECT 1 FROM sys.databases WHERE name = 'DeviceManager')
BEGIN
    CREATE DATABASE DeviceManager;
END
GO

USE DeviceManager;
GO

-- Create the Users table if it does not exist
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE name = 'Users')
BEGIN
    CREATE TABLE Users (
        UserID INT IDENTITY(1, 1) PRIMARY KEY,
		Email VARCHAR(255) NOT NULL,
        Password VARCHAR(255) NOT NULL,
        Name VARCHAR(50) NOT NULL,
        Role VARCHAR(50) NOT NULL,
        Location VARCHAR(50) NOT NULL
    );

    -- Insert dummy data into the Users table
    INSERT INTO Users (Email, Password, Name, Role, Location)
    VALUES
        ('user1@example.com', 'password1', 'User 1', 'Role 1', 'Location 1'),
        ('user2@example.com', 'password2', 'User 2', 'Role 2', 'Location 2'),
        ('user3@example.com', 'password3', 'User 3', 'Role 3', 'Location 3'),
        ('user4@example.com', 'password4', 'User 4', 'Role 4', 'Location 4'),
        ('user5@example.com', 'password5', 'User 5', 'Role 5', 'Location 5');
END
GO

-- Create the Devices table if it does not exist
IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE name = 'Devices')
BEGIN
    CREATE TABLE Devices (
        DeviceID INT IDENTITY(1, 1) PRIMARY KEY,
        UserID INT FOREIGN KEY REFERENCES Users(UserID) ON DELETE SET NULL,
        Name VARCHAR(50) NOT NULL,
        Manufacturer VARCHAR(50) NOT NULL,
        Type VARCHAR(50) NOT NULL,
        OperatingSystem VARCHAR(50) NOT NULL,
        OSVersion VARCHAR(50) NOT NULL,
        Processor VARCHAR(50) NOT NULL,
        RAMAmount INT NOT NULL
    );

    -- Insert dummy data into the Devices table
    INSERT INTO Devices (UserID, Name, Manufacturer, Type, OperatingSystem, OSVersion, Processor, RAMAmount)
    VALUES
        (1, 'Device 1', 'Manufacturer 1', 'Type 1', 'OS 1', 'Version 1', 'Processor 1', 4),
        (2, 'Device 2', 'Manufacturer 2', 'Type 2', 'OS 2', 'Version 2', 'Processor 2', 8),
        (2, 'Device 3', 'Manufacturer 3', 'Type 3', 'OS 3', 'Version 3', 'Processor 3', 16),
        (3, 'Device 4', 'Manufacturer 4', 'Type 4', 'OS 4', 'Version 4', 'Processor 4', 8),
        (3, 'Device 5', 'Manufacturer 5', 'Type 5', 'OS 5', 'Version 5', 'Processor 5', 16),
        (4, 'Device 6', 'Manufacturer 6', 'Type 6', 'OS 6', 'Version 6', 'Processor 6', 4),
        (4, 'Device 7', 'Manufacturer 7', 'Type 7', 'OS 7', 'Version 7', 'Processor 7', 8),
        (4, 'Device 8', 'Manufacturer 8', 'Type 8', 'OS 8', 'Version 8', 'Processor 8', 16),
        (5, 'Device 9', 'Manufacturer 9', 'Type 9', 'OS 9', 'Version 9', 'Processor 9', 8),
        (5, 'Device 10', 'Manufacturer 10', 'Type 10', 'OS 10', 'Version 10', 'Processor 10', 16);
END
GO
