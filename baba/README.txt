BIRTHDAY SCRAPBOOK WEBSITE FOR MY LOVE

Files:
- index.html: website structure and all seven sections/pages
- style.css: layout, colors, typography, scrapbook styling, mobile responsive rules
- script.js: pagination, navigation, menu, and music button

OPEN IN VISUAL STUDIO CODE
1. Extract the ZIP file.
2. Open the extracted birthday_scrapbook_website folder in Visual Studio Code.
3. Open index.html in a browser, or use the Live Server extension and click "Go Live".
4. Internet is needed for the sample online photos and Google Fonts.

CUSTOMIZE YOUR WEBSITE
- Replace the sample image URLs in index.html with your own photo paths, for example: images/our-photo-1.jpg.
- Create an "images" folder and put your photos inside it.
- To add music, place your MP3 in this folder and name it our-song.mp3. Then in script.js, change the song button handler if you want the button to play directly; the current version reveals the audio player as a placeholder.
- Edit the birthday text, dates, reasons, song title, and captions in index.html.
- There are 7 navigable sections total: Home + 6 scrapbook pages.
\nPLAYLIST UPDATE\n- The birthday playlist now uses a dark olive album-player design inspired by the supplied reference image.\n- The photo frame remains editable; replace its image URL with your own photo.\n- The lyrics panel is a dedicated space for your own permitted lyric excerpts or personal notes. Full copyrighted lyrics are not included.\n- Put your legally obtained audio file in this folder and name it exist-for-love.mp3. The music plays locally in the website; there are no Spotify links.\n

LOCAL PLAYLIST AUDIO
- Put your audio file named exactly: AURORA - Exist For Love (Lyric Video).mp3
  in the same folder as index.html. The file itself is not bundled in this ZIP.
- The play button plays that local file without opening Spotify or another site.
- To display synced lyrics, add lyric lines you have permission to use in script.js
  inside the syncedLyrics array. Each item has this format: { time: 12, text: "Your lyric line" }
  Use timestamps in seconds and list the lines in ascending time order. Full copyrighted lyrics are not included.


LYRIC VIDEO SETUP
-----------------
The playlist play button now plays the lyric video directly inside the website. Place the actual video file named exactly:
AURORA - Exist For Love (Lyric Video).mp4
in the same folder as index.html. The .mp3 file is audio-only and cannot display the lyric video. The video file itself is not bundled.
