import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className={'grid min-h-screen w-full place-items-center'}>
      <div className={'flex flex-col items-center gap-y-4'}>
        <div className={'flex items-center gap-x-4 font-bold text-zinc-400 dark:text-zinc-600'}>
          <h1 className={'text-6xl'}>{'404'}</h1>
          <p className={'text-2xl'}>{'Not Found'}</p>
        </div>
        <Link className={'font-medium text-zinc-400 hover:underline dark:text-zinc-600'} to={'/'}>{'Go Back'}</Link>
      </div>
    </div>
  )
}
