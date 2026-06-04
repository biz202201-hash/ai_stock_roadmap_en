import { Share2, Twitter, Facebook, Linkedin, Pin } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

export default function ShareButtons({ title, url, description }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || title);

  const shareLinks = [
    {
      name: "X",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:bg-black hover:text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-blue-700 hover:text-white",
    },
    {
      name: "Pinterest",
      icon: Pin,
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedDescription}`,
      color: "hover:bg-red-600 hover:text-white",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-gray-600">
        <Share2 size={18} />
        <span className="text-sm font-medium">シェア:</span>
      </div>
      <div className="flex gap-2">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${link.name}でシェア`}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 transition-all duration-200 ${link.color}`}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
