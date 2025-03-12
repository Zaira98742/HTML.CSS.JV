function formatDates(dates) {
  if (!Array.isArray(dates)) {
    return "Du lieu khong hop le";
  }
  if (dates.length === 0) {
    return "Mang khong co phan tu nao";
  }
  return dates.map(dateStr => {
    let [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  });
}
console.log(formatDates(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(formatDates([]));
console.log(formatDates("abc"));
