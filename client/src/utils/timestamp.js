export const diffCreatedAt = createdAt => {
  const objectCreatedAt = new Date(createdAt);
  const now = new Date();
  const minuteDiff = now.getMinutes() - objectCreatedAt.getMinutes();
  const hourDiff = now.getHours() - objectCreatedAt.getHours();
  const dateDiff = now.getDate() - objectCreatedAt.getDate();
  const monthDiff = now.getMonth() - objectCreatedAt.getMonth();

  if (monthDiff === 0) {
    if (dateDiff === 0) {
      if (hourDiff === 0) {
        if (minuteDiff === 0 || minuteDiff === 1) {
          return "1 minute ago";
        } else {
          return `${minuteDiff} minutes ago`;
        }
      } else if (hourDiff === 1) {
        return "1 hour ago";
      } else {
        return `${hourDiff} hours ago`;
      }
    } else if (dateDiff === 1) {
      return "1 day ago";
    } else {
      return `${dateDiff} days ago`;
    }
  } else if (monthDiff === 1) {
    return "1 month ago";
  } else {
    return `${monthDiff} months ago`;
  }
};
