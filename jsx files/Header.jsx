export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0B0D12]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex h-16 items-center justify-between gap-3 lg:h-20">
          {/* Mobile Menu */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#A9B2C3] hover:bg-[#151922] hover:text-[#F4F7FB] md:hidden"
            aria-label="Toggle menu"
          >
            <X className="h-5 w-5" />

            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <a
            href="/"
            className="shrink-0 text-xl font-bold tracking-tight sm:text-2xl"
          >
            <span className="bg-gradient-to-r from-[#F4F7FB] via-[#A78BFA] to-[#22D3EE] bg-clip-text text-transparent">
              NEXA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/shop"
              className="text-sm font-semibold text-[#F4F7FB] hover:text-[#A78BFA]"
            >
              Shop Now
            </a>

            <button
              type="button"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#A9B2C3] hover:text-[#F4F7FB]"
            >
              Categories
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
          </nav>

          {/* Desktop Search */}
          <form className="mx-auto hidden max-w-md flex-1 md:block lg:mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737D90]" />

              <input
                type="search"
                placeholder="Search products..."
                className="h-11 w-full rounded-xl border border-white/[0.10] bg-[#151922] pl-11 pr-4 text-sm text-[#F4F7FB] outline-none placeholder:text-[#737D90] focus:border-[#8B5CF6]/60 focus:ring-2 focus:ring-[#8B5CF6]/15"
              />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Mobile Search Icon */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#A9B2C3] hover:bg-[#151922] hover:text-[#F4F7FB] md:hidden"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-[#A9B2C3] hover:bg-[#151922] hover:text-[#F4F7FB]"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />

              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#8B5CF6] px-1 text-[9px] font-bold text-[#F4F7FB]">
                2
              </span>
            </button>

            {/* Account */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#A9B2C3] hover:bg-[#151922] hover:text-[#F4F7FB]"
              aria-label="Account"
            >
              <UserRound className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form className="pb-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737D90]" />

            <input
              type="search"
              placeholder="Search products..."
              className="h-11 w-full rounded-xl border border-white/[0.10] bg-[#151922] pl-11 pr-4 text-sm text-[#F4F7FB] outline-none placeholder:text-[#737D90] focus:border-[#8B5CF6]/60 focus:ring-2 focus:ring-[#8B5CF6]/15"
            />
          </div>
        </form>

        {/* Mobile Menu */}

        <div className="border-t border-white/[0.08] py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <a
              href="/shop"
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#F4F7FB] hover:bg-[#151922] hover:text-[#A78BFA]"
            >
              Shop Now
            </a>

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[#A9B2C3] hover:bg-[#151922] hover:text-[#F4F7FB]"
            >
              Categories
              <ChevronDown className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
