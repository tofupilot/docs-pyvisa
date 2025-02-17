import Image from 'next/image'

export function Logo() {
  return (
    <a href="https://www.pyvisa.com" aria-label="Landing Page">
      <Image
        width={130}
        height={30}
        quality={100}
        src="/logo.png"
        alt="PyVISA"
      />
    </a>
  )
}
