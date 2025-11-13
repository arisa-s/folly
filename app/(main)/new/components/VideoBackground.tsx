const VideoBackground = ({ src }: { src: string }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video autoPlay muted playsInline className="w-full h-full object-cover">
        <source src={`${src}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/10 dark:from-black/10 dark:to-black/10 pointer-events-none" />
    </div>
  );
};

export default VideoBackground;
