import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { Heart, BookHeart, ThumbsUp } from 'lucide-react'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Akashic
        </Typography>
        <Typography className="max-w-2xl text-primary-foreground" variant="h5">
          {`Découvrez Akashic. Plongez dans un vaste catalogue de mangas, partagez vos avis avec d'autres passionnés, et suivez vos séries préférées tout en connectant avec une communauté dynamique. Rejoignez-nous et vivez une expérience de lecture unique et interactive!`}</Typography>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/image1.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            {`Le mot d'ordre : la communauté`}
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Heart size={24} />}
              headline="Recommandations"
              description="Recevez des recommandations personnalisées de mangas en fonction de vos goûts. Découvrez de nouvelles séries adaptées à vos préférences et enrichissez votre expérience de lecture!"
            />
            <Feature
              icon={<BookHeart size={24} />}
              headline="Liste de favoris"
              description="Ajoutez vos mangas préférés à votre liste de favoris pour y accéder facilement et suivre les mises à jour. Ne manquez jamais un chapitre de vos séries incontournables!"
            />
            <Feature
              icon={<ThumbsUp size={24} />}
              headline="Réactions"
              description="Réagissez aux pages de mangas avec des commentaires et utilisez le système de upvote/downvote pour faire ressortir les plus intéressants. Participez à des discussions dynamiques et découvrez les meilleures réactions de la communauté!"
            />
          </div>
          <div className="flex md:flex-row flex-col" style={{width:'100%', justifyContent:'space-between'}}>
            <Image
              width={1024/4}
              height={632/4}
              alt="Pandem.dev hero image"
              src="/image3.png"
            />
            <Image
              width={1024/4}
              height={632/4}
              alt="Pandem.dev hero image"
              src="/image4.png"
            />
            <Image
              width={1024/4}
              height={632/4}
              alt="Pandem.dev hero image"
              src="/image5.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Chatter avec vos amis
          </Typography>
          <Typography className="max-w-2xl text-primary-foreground" variant="h5">
            {`
Discutez de vos mangas préférés avec vos amis grâce à notre fonctionnalité de chat. Échangez vos impressions en direct et partagez votre passion!`}</Typography>
          <Image
            width={1024/4}
            height={632/4}
            alt="Pandem.dev hero image"
            src="/image2.png"
          />
        </div>
      </div>
    </div>
  )
}
