import type {LinktreeData} from '@/types';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandYoutube,
  IconExternalLink,
  IconLink,
  IconMail,
} from '@tabler/icons-react';
import Avatar from 'boring-avatars';

interface Props {
  data: LinktreeData;
}

function Linktree({data}: Props) {
  const {photo, name, about, links, ...rest} = data;
  const socialLinks = Object.entries(rest)
    .map(([k, v]) => {
      let icon;
      switch (k) {
        case 'facebook':
          icon = <IconBrandFacebook />;
          break;
        case 'instagram':
          icon = <IconBrandInstagram />;
          break;
        case 'twitter':
          icon = <IconBrandTwitter />;
          break;
        case 'youtube':
          icon = <IconBrandYoutube />;
          break;
        case 'twitch':
          icon = <IconBrandTwitch />;
          break;
        case 'email':
          icon = <IconMail />;
          break;
        case 'github':
          icon = <IconBrandGithub />;
          break;
        case 'linkedin':
          icon = <IconBrandLinkedin />;
          break;
        default:
          icon = <IconLink />;
      }
      if (v.length > 0) {
        return {
          icon,
          url: v,
        };
      }
    })
    .filter((o) => o !== undefined);

  return (
    <div className="mx-auto h-full w-full max-w-lg space-y-8 p-4 pt-12">
      <div className="text-center">
        {photo.length !== 0 ? (
          <div className="mx-auto aspect-square w-20 overflow-hidden rounded-full ring-4 ring-emerald-200">
            <img
              className="h-full w-full object-cover"
              src={photo}
              alt="photo"
            />
          </div>
        ) : (
          <div className="mx-auto aspect-square w-20 overflow-hidden rounded-full ring-4 ring-emerald-200">
            <Avatar size={80} name={name} variant="beam" />
          </div>
        )}
        <h1 className="mt-4 text-2xl font-bold">{name}</h1>
        <p className="mt-2 text-sm text-gray-600">{about}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-2">
        {socialLinks.map((s) =>
          s !== undefined ? (
            <span className="p-1" key={s.url}>
              <a href={s.url} target="_blank" rel="noopener | noreferrer">
                {s.icon}
              </a>
            </span>
          ) : null
        )}
      </div>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.url}>
            <a
              className="flex items-center gap-x-4 rounded border px-4 py-2 shadow-sm hover:bg-gray-50"
              href={link.url}
              target="_blank"
              rel="noopener | noreferrer"
            >
              <IconExternalLink size={20} />
              <span className="text-sm">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Linktree;
