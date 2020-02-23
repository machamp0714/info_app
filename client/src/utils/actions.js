export const openWindow = (url, windowTitle) => {
  const width = 500;
  const height = 600;
  const windowX = (window.screen.width - width) / 2;
  const windowY = (window.screen.height - height) / 2;
  const title = windowTitle;
  window.open(
    url,
    title,
    `top=${windowY},left=${windowX},width=${width},height=${height}`
  );
};
