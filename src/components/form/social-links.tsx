import {useFormContext} from '@/contexts/form';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
  IconSocial,
} from '@tabler/icons-react';

function SocialLinks() {
  const {formData, setFormData} = useFormContext();
  const {
    facebook,
    instagram,
    twitter,
    youtube,
    twitch,
    email,
    github,
    linkedin,
  } = formData;

  return (
    <div>
      <div className="flex items-center">
        <IconSocial />
        <h2 className="ml-1 text-lg font-medium tracking-wide">Social Links</h2>
      </div>
      <div className="mt-4 grid gap-8 border p-6 md:grid-cols-2">
        <div>
          <label className="block text-sm text-gray-700" htmlFor="facebook">
            Facebook
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 text-gray-500">
              <IconBrandFacebook size={20} />
            </span>
            <input
              id="facebook"
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              type="text"
              placeholder="https://www.facebook.com/"
              value={facebook}
              onChange={(e) =>
                setFormData((prev) => ({...prev, facebook: e.target.value}))
              }
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700" htmlFor="instagram">
            Instagram
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 text-gray-500">
              <IconBrandInstagram size={20} />
            </span>
            <input
              id="instagram"
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              type="text"
              placeholder="https://www.instagram.com/"
              value={instagram}
              onChange={(e) =>
                setFormData((prev) => ({...prev, instagram: e.target.value}))
              }
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700" htmlFor="twitter">
            Twitter
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 text-gray-500">
              <IconBrandTwitter size={20} />
            </span>
            <input
              id="twitter"
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              type="text"
              placeholder="https://twitter.com/"
              value={twitter}
              onChange={(e) =>
                setFormData((prev) => ({...prev, twitter: e.target.value}))
              }
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700" htmlFor="youtube">
            Youtube
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 text-gray-500">
              <IconBrandYoutube size={20} />
            </span>
            <input
              id="youtube"
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              type="text"
              placeholder="https://www.youtube.com/"
              value={youtube}
              onChange={(e) =>
                setFormData((prev) => ({...prev, youtube: e.target.value}))
              }
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700" htmlFor="twitch">
            Twitch
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 text-gray-500">
              <IconBrandTwitch size={20} />
            </span>
            <input
              id="twitch"
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              type="text"
              placeholder="https://www.twitch.com/"
              value={twitch}
              onChange={(e) =>
                setFormData((prev) => ({...prev, twitch: e.target.value}))
              }
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700" htmlFor="email">
            Email
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 text-gray-500">
              <IconMail size={20} />
            </span>
            <input
              id="email"
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              type="text"
              placeholder="example@example.com"
              value={email}
              onChange={(e) =>
                setFormData((prev) => ({...prev, email: e.target.value}))
              }
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700" htmlFor="github">
            Github
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 text-gray-500">
              <IconBrandGithub size={20} />
            </span>
            <input
              id="github"
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              type="text"
              placeholder="https://github.com/"
              value={github}
              onChange={(e) =>
                setFormData((prev) => ({...prev, github: e.target.value}))
              }
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700" htmlFor="linkedin">
            LinkedIn
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 text-gray-500">
              <IconBrandLinkedin size={20} />
            </span>
            <input
              id="linkedin"
              className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              type="text"
              placeholder="https://www.linkedin.com/"
              value={linkedin}
              onChange={(e) =>
                setFormData((prev) => ({...prev, linkedin: e.target.value}))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
