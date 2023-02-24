interface ProgressBarProps{
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const progressStyles = {
    width: `${props.progress}`
  }

  return (
    <div className="h-3 rounded-xl bg-zinc-700 mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-blue-600 transition-all"
        style={{width:`${props.progress}%`}}
      ></div>
    </div>
  )
}
