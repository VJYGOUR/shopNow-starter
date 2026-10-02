const Register = () => {
  return (
    <main className="min-h-screen bg-gray-200 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm lg:grid-cols-2">
        {/* Left */}
        <div className="hidden bg-gray-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
              MYAPP
            </span>

            <h1 className="mt-8 max-w-md text-4xl font-bold leading-tight">
              Create your account and get started.
            </h1>

            <p className="mt-5 max-w-md text-gray-400">
              Join our platform and manage everything from one simple,
              responsive dashboard.
            </p>
          </div>

          <p className="text-sm text-gray-500">Simple. Secure. Responsive.</p>
        </div>

        {/* Form */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Create account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your information to create your account.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Confirm password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-700"
              >
                Create account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-gray-900 hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
