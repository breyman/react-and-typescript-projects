// export type NameTagProps = {
type NameTagProps = {
  name?: string;
  age: number;
  color: 'red' | 'blue' | 'green';
};

// export default function Application() {
// export const NameTag = () => {
// const NameTag = (props: { name: string = 'Brian'; age: number = 10 }) => {
const NameTag = ({ name = 'Brian', age }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>
          {name} {age}
        </p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name="hope" age={13} color="green" />;

export default Application;
// export Application;
