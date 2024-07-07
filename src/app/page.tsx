import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { Workflow, Users, BookHeart, ThumbsUp } from 'lucide-react'
import Link from 'next/link'

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
          Découvrez Akashic. Plongez dans un vaste catalogue de mangas, partagez vos avis avec d'autres passionnés, et suivez vos séries préférées tout en connectant avec une communauté dynamique. Rejoignez-nous et vivez une expérience de lecture unique et interactive!
        </Typography>
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
            Le mot d'ordre : la communauté
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Users size={24} />}
              headline="Liste d'amis"
              description="Créez votre liste d'amis pour suivre leurs lectures et partager vos découvertes manga favorites. Restez connecté avec votre communauté et échangez des recommandations en temps réel!"
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
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Instant setup, no custom code
          </Typography>
          <Typography className="max-w-2xl text-primary-foreground" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
