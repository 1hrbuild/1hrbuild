const fs = require("fs")

const episodes = fs
  .readdirSync("./episodes")
  .filter(
    filename =>
      filename.split(".").pop() === "json" && !filename.includes("manifest")
  )
  .map(filename => filename.split(".")[0])

fs.writeFileSync("./episodes/manifest.json", JSON.stringify(episodes))
