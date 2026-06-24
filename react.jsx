const notifications = [
  {
    id: 1,
    title: "Exam Result",
    type: "result",
    weight: 10,
    recency: 5,
    unread: true
  },
  {
    id: 2,
    title: "Campus Event",
    type: "event",
    weight: 7,
    recency: 8,
    unread: true
  },
  {
    id: 3,
    title: "Placement Alert",
    type: "alert",
    weight: 9,
    recency: 10,
    unread: false
  }
];

function getTopNotifications(data, n) {

  const unread = data.filter(
    notification => notification.unread
  );

  unread.sort((a, b) => {
    const priorityA =
      a.weight + a.recency;

    const priorityB =
      b.weight + b.recency;

    return priorityB - priorityA;
  });

  return unread.slice(0, n);
}

const result =
  getTopNotifications(notifications, 2);

console.log(result);
