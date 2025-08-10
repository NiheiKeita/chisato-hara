"use client"

interface VideoPlayerProps {
  videoUrl: string
  title: string
  isHovered: boolean
}

export function VideoPlayer({ videoUrl, title, isHovered }: VideoPlayerProps) {
  return (
    <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
      {isHovered ? (
        <iframe
          src={videoUrl}
          title={title}
          className="size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500">
          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <svg 
                className="size-12 text-gray-300"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.108v3.784a1 1 0 001.555.94l3.437-1.892a1 1 0 000-1.788L9.555 7.168z" />
              </svg>
            </div>
            <span className="text-sm text-gray-300">
              ホバーして映像を再生
            </span>
          </div>
        </div>
      )}
    </div>
  )
}