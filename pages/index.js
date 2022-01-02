import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {

  let  { t }= useTranslation()
  const router=useRouter()

  return (
    <div> 
      <h1>{t('common:greeting')}</h1>
      <ul>
        {router.locales.map(locale=>{
          return(
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
