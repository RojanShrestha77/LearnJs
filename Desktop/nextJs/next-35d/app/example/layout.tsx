export default function ExampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div> EXAMPLE Header</div>
      {children}
      <div> EXAMPLE footer</div>
    </section>
  );
}
