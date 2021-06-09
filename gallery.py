import os
import json

base = "/gallery/"

gallery = {"images": [], "videos": []}
for i in os.listdir("./static/gallery/"):
    if i.endswith(".jpg"):
        gallery["images"].append(base + i)
    elif i.endswith(".mp4"):
        gallery["videos"].append(base + i)

with open("./src/gallery.json", "w") as file:
    file.write(json.dumps(gallery))
    file.close()
