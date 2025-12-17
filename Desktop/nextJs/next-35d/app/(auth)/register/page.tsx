import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>
        Register Page
        <Link href="/login"> Link </Link>
      </div>
    </div>
  );
}

// Task
// create a component for Register Form and use in Register Page
// create a Link to Register Page in Login Page
// create a url for blogs/[id]/edit - display Edit Blog Page
// create a url for blogs/[id]/delete - display Delete Blog Page
// create a url for blogs/[id]/new - display New Blog Page
// create a url for /blogs/new - display New Blog Page
// add customer in "dashboard" group
// create an url for /customers- display All customer Page
// create an url for /customers/[id] - display Get customer Page
