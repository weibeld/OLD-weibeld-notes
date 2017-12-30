---
title:  Google Photos
author: Daniel Weibel
date:   3 October 2017
last_updated: 3 October 2017
---

# Photo Storage

Google Photos is a free cloud photo storage service.

After uploading photos to Google Photos, they are safely stored in the cloud, and they can be deleted from all local devices.

The uploaded photos can be accessed from any device in one of the following ways:

- The Google Photos [website](https://photos.google.com/)
- The Google Photos mobile app for [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.photos) and [iOS](https://itunes.apple.com/us/app/google-photos/id962194608)

# Storage Options

You can store your photos and videos in two options:

1. Original resolution
2. High resolution

With **Option 1** the photos are stored in their original resolution, no matter how big this resolution is. However, in this case the space occupied by the photos **counts against your [Google Drive storage quota](https://www.google.com/settings/storage)**. That is, you can upload not more photos than fit in your current storage quota (15 GB are free, 100 GB costs $20 per year, 1 TB costs $100 per year).

With **Option 2** the storage space available to you is **unlimited**. That is, you can upload an unlimited number of photos for free. However, in this case the photos and videos are bound to a maximum resolution:

- 16MP for photos (5312x2988 pixels for 16:9 ratio)
- 1080p for videos (1920x1080 pixels)

If an uploaded photo or video has a **smaller resolution** than the maximum resolution, then its resolution is not changed.

If an uploaded photo or video has a **larger resolution** than the maximum resolution, then its resolution is scaled down to the maximum resolution. That is, the original version of the photo or video with the large resolution is "lost". 

The maximum resolutions of Google Photos are rather big and are not much below the the maximum resolutions of the cameras of many smartphones.

# How To Upload Photos

Photos can be uploaded to Google Photos in two ways:

1. Through the [Google Photos website](https://photos.google.com/) from a computer
2. Through the Google Photos [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.photos) or [iOS](https://itunes.apple.com/us/app/google-photos/id962194608) app from a mobile device

## Upload through website

On the website, click "Upload" in the title bar, or drag and drop photos to the main window.

## Upload through Android app

This is done automatically by the app for the folders that are selected for "back up & sync". This works as follows:

The app scans all folders of the device for photos and videos. All the folders containing photos and videos are displayed under "Device folders" in the main menu of the app.

For each of these folders, "back up & sync" can be separately activated or deactivated.

### Do back up and sync

If "back up & sync" is activated for a folder, then all the photos and videos in this folder are uploaded to Google Photos. Whenever a new photo or video is added to this folder, it is automatically uploaded to Google Photos.

#### Some information

Note: the information above should, more or less, also apply to the iOS app, however, I didn't test it.


# Deleting Photos On Mobile Device and Google Photos Android App

## Delete from mobile device {#delete-from-device}

If you physically delete a photo from one of the "back up & sync" folders, this photo is **not deleted** from Google Photos. The photo is still stored in Google Photos and can be viewed in the Google Photos app and on the website.

This is because the photo was already "in" Google Photos, and what happens to the original source from which this photo was uploaded to Google Photos, doesn't matter.

For example, if your "Camera" folder (the folder where the camera app saves photos) has "back up & sync" active, and you delete a photo from this folder, for example with the phone's native gallery app, then this photo is **not deleted** from Google Photos. The photo is physically removed from the device, yes, but a *copy* of this photo, that was originally uploaded to Google Photos, still remains untouched in the Google Photos cloud storage.

The same applies for photos that are deleted, for example, with [Android File Transfer](https://www.android.com/filetransfer/), some file explorer app, or [adb](https://developer.android.com/studio/command-line/adb.html). 

This is analogous to the case [Delete from computer](#delete-from-computer).

## Delete from Google Photos Android app {#delete-from-app}

If you delete a photo from the Google Photos app, then this photo is deleted from the Google Photos cloud storage, and, if the original source of this photo is present on the device, the source photo is physically **deleted from the mobile device**.

The result of this is that the deleted photo is removed from Google Photos, and it disappears from the Google Photos app as well as from the website. Furthermore, if the photo has been uploaded to Google Photos from the mobile device, and the source file of this photo still exists on the device, then this source file is **deleted** from the device.

For example, if your "Camera" folder has "back up & sync" active, and you delete one of the camera photos in the Google Photos app, then the corresponding file in the "Camera" folder is **deleted**. That is, this photo not only disappears from Google Photos, but it also physically disappears from the device, and it cannot be accessed anymore, neither by the phone's native gallery app, nor by any other means.

This is analogous to the case [Delete from Google Photos website](#delete-from-website).

## iOS devices

The information above should, more or less, also apply to iOS devices, however, I didn't test it.


# Deleting Photos on Computer and Google Photos Website

## Delete from computer {#delete-from-computer}

If you delete a photo from the computer that has previously been uploaded to Google Photos, then this photo is **not deleted** from Google Photos.

The uploaded photo is already "in" Google Photos, and what happens to the original source file after the upload does not matter.

Thus, after uploading photos to Google Photos, you can safely delete all of them from your computer. They will all still remain in the Google Photos cloud storage.

This is analogous to the case [Delete from mobile device](#delete-from-device).

## Delete from Google Photos website {#delete-from-website}

If you delete a photo from the Google Photos website, then this photo is deleted from the Google Photos cloud storage, and in addition, if this photo has been uploaded from a mobile device by the Google Photos app, and if the original source file of this photo still exists on the mobile device, then this source file is physically **deleted from the mobile device**.

This is analogous to the case [Delete from Google Photos Android app](#delete-from-app).


# Does The Google Photos App Maintain A Local Cache?

Yes, the Google Photos app maintains a local cache of a selection of photos and videos that are not already stored on the device. So, frequently accessed photos and videos can be viewed offline.

The location of this cache is not known.


# What Does Google Photos Do To My Photos?

If you upload a photo to Google Photos and then download it again, the downloaded photo is not bit-wise exact copy of the uploaded photo. Google Photo processes each photo before saving it in its cloud storage.

This is obvious for the "High Resolution" storage option when the uploaded photo exceeds the maximum resolution of 16 MP. In this case, Google Photos scales the photo down to 16 MP, and if the photo is downloaded, it is obviously different from the photo that was uploaded.

However, there is also a difference for photos that are not subject to downscaling. Typically, a photo re-downloaded from Google Photos has a significantly smaller file size than the original photo, often the file size is even cut in two! The resolution of the photo and any meta-data stays the same. In terms of image quality, there is almost no difference between the original photo and the photo re-downloaded from Google Photos, this has been investigated [here](http://www.huffingtonpost.in/arpit-verma/bursting-the-myth-of-comp_b_8902076.html).

The conclusion of this is that Google Photos compresses all uploaded photos with a very powerful **compression algorithm** that causes no or only a negligible quality loss. 

For normal users the potential tiny quality loss should really be negligible, and in this sense the "free" compression by Google Photos is a useful feature: it allows to store more photos in your quota if you use the "Original Resolution" storage option, it allows for faster downloads, and if you want to keep a local copy of your photos, you can re-download your super-compressed Google Photos library via the website, and save it with significantly less disk space than the original files would use.
