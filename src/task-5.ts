// Задача 5. Union Type (файл task-5.ts)
// Функція logStatus приймає рядок status і виводить відповідне повідомлення.
// Типізуй параметр status так, щоб дозволити тільки три конкретні рядкові значення: "loading", "success", "error"
// Переконайся, що TypeScript не дозволяє передати будь-яке інше значення.
// Типізуй повернення функції, зауваж що вона нічого явно не повертає.

function logStatus(status: "loading" | "success" | "error"): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");
