export default function RegisterForm() {
  return (
    <div className="mx-auto max-2-md p-4 border">
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <div>
        <button
          type="submit"
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          register
        </button>
      </div>
    </div>
  );
}
