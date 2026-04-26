import ExpensesProvider from "./components/ExpenseContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ExpensesProvider>
          {children}
        </ExpensesProvider>
      </body>
    </html>
  );
}