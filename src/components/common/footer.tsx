'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'

export function Footer() {
  return (
    <footer className="flex h-12 items-center justify-center w-full border-t">
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link
            href="/"
            className="pointer flex items-center"
          >
            <img src="/logo.svg" className="mr-3" />
            <Typography className="text-primary !text-base font-medium ">
              Akashic
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  )
}
