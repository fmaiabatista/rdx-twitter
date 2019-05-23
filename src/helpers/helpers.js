// Helper functions

// Adapted from: https://to.ly/1zcHe
export function getRandomIntInclusive(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}

export function parseMedia(content) {
  let type;
  let src;

  // Some common image formats
  const regexImage = /(?<src>http.*.(?:jpg|jpeg|png|webp|gif))/;
  // For video, we'll only parse YouTube links (both youtube and youtu.be)
  const regexVideo = /http.*(?:youtube|youtu.be).*\/(?:watch\?v=|)(?<id>\S*)/;

  if (content.match(regexImage)) {
    type = "image";
    ({ src } = content.match(regexImage).groups);
  }

  if (content.match(regexVideo)) {
    type = "video";
    // Turn "https://www.youtube.com/watch?v=XWGXimIJhGg"
    // or "https://youtu.be/XWGXimIJhGg"
    // into "https://www.youtube.com/embed/XWGXimIJhGg"
    src = `https://youtube.com/embed/${content.match(regexVideo).groups.id}`;
  }

  return { type, src };
}
