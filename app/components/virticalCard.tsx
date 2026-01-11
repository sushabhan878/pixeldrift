import React from "react";

interface WorkProps {
  id?: number;
  title: string;
  client: string;
  product?: string;
  location?: string;
  testimonial?: string;
  rating?: number;
  videoUrl?: string;
}

export default function VirticalCard({ work }: { work: WorkProps }) {
  const isMp4 = (url?: string) => !!url && /\.mp4(\?.*)?$/i.test(url);

  const getEmbedUrl = (url?: string) => {
    if (!url) return "";
    try {
      if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
      if (url.includes("youtu.be/"))
        return url.replace("youtu.be/", "www.youtube.com/embed/");
      return url;
    } catch (e) {
      return url;
    }
  };

  const embed = getEmbedUrl(work.videoUrl);
  const iframeSrc =
    embed && embed.includes("youtube")
      ? `${embed}?autoplay=1&mute=1&controls=0&rel=0`
      : embed;

  return (
    <div className="rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 overflow-hidden w-[305px] bg-black flex flex-col">
      {/* Video area - fixed height ~380px */}
      <div className="relative w-full h-[380px] bg-black/10">
        {work.videoUrl && isMp4(work.videoUrl) ? (
          <video
            src={work.videoUrl}
            muted
            loop
            playsInline
            autoPlay
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : work.videoUrl ? (
          <iframe
            src={iframeSrc}
            className="absolute inset-0 w-full h-full"
            title={work.title}
            allow="autoplay; encrypted-media"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-900" />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
        <p className="text-sm text-purple-400 font-semibold mb-1">
          {work.client}
        </p>
        {work.location && (
          <p className="text-sm text-gray-400 mb-2">{work.location}</p>
        )}
        {work.product && (
          <p className="text-sm text-gray-400 mb-3">{work.product}</p>
        )}

        {work.testimonial && (
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            "{work.testimonial}"
          </p>
        )}

        <div className="flex items-center gap-2 pt-2 border-t border-gray-700/50">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < (work.rating ?? 0) ? "text-yellow-400" : "text-gray-600"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-400 ml-auto">
            {work.rating ?? 0}/5
          </span>
        </div>
      </div>
    </div>
  );
}
