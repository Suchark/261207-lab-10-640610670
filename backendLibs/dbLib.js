import fs from "fs";

export function readDB() {
  const srt = fs.readFileSync("Data/chatroom.json", { encoding: "utf-8" });
  const chatroom = JSON.parse(str);
  return chatroom;
}

export function writeDB(chatroom) {
  const str = JSON.stringify(chatroom);
  fs.writeFileSync("Data/chatroom.json", str, { encoding: "utf-8" });
}
