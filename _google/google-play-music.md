---
title:  Google Play Music
author: Daniel Weibel
date:   3 October 2017
last_updated: 3 October 2017
---

# Standard Account (Free)

Upload **50,000 songs** at no cost.

These songs are stored in the cloud and can then be accessed from any device, either with:

- The Google Play Music [website](https://play.google.com/music/)
- The Google Play Music app for [Android](https://play.google.com/store/apps/details?id=com.google.android.music) or [iOS](https://itunes.apple.com/us/app/google-play-music/id691797987).

When playing a song on the **website**, the song is streamed.

When playing a song on the mobile **app**, the song is streamed, and at the same time downloaded and cached on the device. This song can then later be played offline.

# How To Upload Music

Audio files can be uploaded from a **computer**. It is not intended to upload audio files from a mobile device.

There are two ways to upload audio files from a computer:

1. Via the [Google Play Music Website](https://play.google.com/music/): look for "Upload music" in the main menu
2. Via the [Google Play Music Manager](https://support.google.com/googleplaymusic/answer/1075570): install it on your computer, then add folders containing the audio files you want to upload

Option 2 is more reliable.

# Are My Files Synchronised With My Computer?

No. Once the files are uploaded to Google Play Music, they are just there. If you delete an uploaded file from your computer, it is **not deleted** from Google Play Music.

Thus, after uploading all your files to Google Play Music, you can delete all of them from your computer and nothing bad will happen.

Similarly, if you delete a song from Google Play Music, it is **not deleted** from your computer.

# Android App

The Android app provides some additions with respect to the website.


## Inclusion of other audio files on the device

The app scans the entire device for folders containing audio files, and by default includes them in the local library.

These files, that are saved on the device, are **not uploaded** to Google Play Music. They are only included in the local library and can only be played on the mobile device with the app.

For example, this may include (undesiredably) the `/sdcard/WhatsApp/Media/WhatsApp Audio` folder containing WhatsApp voice messages.

## Exclude a folder from inclusion in the local library

To exclude a folder from being included in the local library by the Google Play Music app, create an empty file with name **.nomedia** in this folder.

For example, create the file `/sdcard/WhatsApp/Media/WhatsApp Audio/.nomedia`.

## Deleting a song coming from a folder on the device

If you delete, from within the Google Play Music app, a song that has been included from a folder on the device, then the file of this song is **deleted from the device**.

For example, if the `WhatsApp Audio` folder has been included, and you delete a voice message from within the Google Play Music app, then the original voice message in the `/sdcard/WhatsApp/Media/WhatsApp Audio` folder is deleted.

## Deleting a song coming from Google Play Music

This is the same as deleting a song on the Google Play Music website, i.e. the song is deleted from the central repository of the library in the cloud.

## Where are the downloaded songs stored?

Every song that is played with the Google Play Music app is cached on the device, so that it can be played offline next time. However, the location of this cache is not known.

The location of cached songs that have been purchased through Google Play Music is:

`/sdcard/Android/data/com.google.android.music/files/`

## iOS app

The above information should apply, more or less, also for the iOS app, however, I didn't test it.

# What Does Google Play Music To My Files?

When uploading a file to Google Play Music, and downloading it again, it is not exactly bit-wisely the same file. Google Play Music processes each file that is uploaded before storing it in its cloud.

However, for MP3 files, the changes are minimal. Typically the size is a couple of bytes lower, but everything else, like sample rate and meta-information, stays the same.

