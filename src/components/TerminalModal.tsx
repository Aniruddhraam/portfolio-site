import { useEffect, useState, useRef } from 'react';
import './TerminalModal.css';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FASTFETCH_OUTPUT = (
  <div className="fastfetch-output">
    <div className="ascii-art">
      <pre>{`
          /:-------------:\\
       :-------------------::
     :-----------/shhOHbmp---:\\
   /-----------omMMMNNNMMD  ---:
  :-----------sMMMMNMNMP.    ---:
 :-----------:MMMdP-------    ---\\
,------------:MMMd--------    ---:
:------------:MMMd-------    .---:
:----    oNMMMMMMMMMNho     .----:
:--     .+shhhMMMmhhy++   .------/
:-    -------:MMMd--------------:
:-   --------/MMMd-------------;
:-    ------/hMMMy------------:
:-- :dMNdhhdNMMNo------------;
:---:sdNMMMMNds:------------:
:------:://:-------------::
:---------------------://
`}</pre>
    </div>
    <div className="sys-info">
      <div className="info-line"><span className="key">aniruddh</span>@<span className="value">aniruddh</span></div>
      <div className="separator">-----------------</div>
      <div className="info-line"><span className="key">OS</span>: Fedora Linux 44 (KDE Plasma Desktop Edition) x86_64</div>
      <div className="info-line"><span className="key">Host</span>: ROG Zephyrus G16 GU605MI_GU605MI (1.0)</div>
      <div className="info-line"><span className="key">Kernel</span>: Linux 7.1.5-201.fc44.x86_64</div>
      <div className="info-line"><span className="key">Uptime</span>: 3 hours, 56 mins</div>
      <div className="info-line"><span className="key">Packages</span>: 15 (flatpak), 2989 (rpm), 9 (snap)</div>
      <div className="info-line"><span className="key">Shell</span>: zsh 5.9</div>
      <div className="info-line"><span className="key">Display (LQ160RJW02)</span>: 2560x1600 @ 1.59x in 16", 240 Hz [Built-in]</div>
      <div className="info-line"><span className="key">DE</span>: KDE Plasma 6.7.3</div>
      <div className="info-line"><span className="key">WM</span>: KWin (Wayland)</div>
      <div className="info-line"><span className="key">WM Theme</span>: Breeze</div>
      <div className="info-line"><span className="key">Theme</span>: Breeze (Dark) [Qt], Breeze-Dark [GTK2], Breeze [GTK3]</div>
      <div className="info-line"><span className="key">Icons</span>: breeze-dark [Qt], breeze-dark [GTK2/3/4]</div>
      <div className="info-line"><span className="key">Font</span>: JetBrains Mono (10pt) [Qt], JetBrains Mono (10pt) [GTK2/3/4]</div>
      <div className="info-line"><span className="key">Cursor</span>: breeze (24px)</div>
      <div className="info-line"><span className="key">Terminal</span>: ghostty 1.3.1-2.fc44</div>
      <div className="info-line"><span className="key">Terminal Font</span>: JetBrains Mono (11pt)</div>
      <div className="info-line"><span className="key">CPU</span>: Intel(R) Core(TM) Ultra 9 185H (12+8+2) @ 5.10 GHz</div>
      <div className="info-line"><span className="key">GPU 1</span>: NVIDIA GeForce RTX 4070 Max-Q / Mobile [Discrete]</div>
      <div className="info-line"><span className="key">GPU 2</span>: Intel Arc Graphics @ 2.35 GHz [Integrated]</div>
      <div className="info-line"><span className="key">Memory</span>: 6.80 GiB / 30.75 GiB (22%)</div>
      <div className="info-line"><span className="key">Swap</span>: 0 B / 8.00 GiB (0%)</div>
      <div className="info-line"><span className="key">Disk (/)</span>: 433.64 GiB / 928.93 GiB (47%) - btrfs</div>
      <div className="info-line"><span className="key">Local IP (wlo1)</span>: 10.143.190.197/24</div>
      <div className="info-line"><span className="key">Battery (A32-K55)</span>: 80% [AC Connected]</div>
      <div className="color-blocks">
        <span className="c-block c1"></span>
        <span className="c-block c2"></span>
        <span className="c-block c3"></span>
        <span className="c-block c4"></span>
        <span className="c-block c5"></span>
        <span className="c-block c6"></span>
        <span className="c-block c7"></span>
      </div>
    </div>
  </div>
);

type HistoryItem = {
  command: string;
  output: React.ReactNode;
};

export const TerminalModal = ({ isOpen, onClose }: TerminalModalProps) => {
  const [history, setHistory] = useState<HistoryItem[]>([{ command: 'fastfetch', output: FASTFETCH_OUTPUT }]);
  const [input, setInput] = useState('');
  const [cwd, setCwd] = useState('/home/aniruddh');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const displayDir = cwd === '/home/aniruddh' ? '~' : cwd.replace('/home/aniruddh', '~');
  const promptStr = `aniruddh@aniruddh:${displayDir}$`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    let output: React.ReactNode = null;
    const args = trimmed.split(' ');
    const baseCmd = args[0].toLowerCase();

    switch (baseCmd) {
      case 'clear':
        setHistory([]);
        return; // Don't add clear to history
      case 'cd':
        const target = args[1];
        if (!target || target === '~' || target === '/home/aniruddh') {
          setCwd('/home/aniruddh');
        } else if (cwd === '/home/aniruddh' && (target === 'projects' || target === 'experience')) {
          setCwd(`/home/aniruddh/${target}`);
        } else if (target === '..') {
          if (cwd !== '/') {
            const parts = cwd.split('/');
            parts.pop();
            setCwd(parts.join('/') || '/');
          }
        } else {
          output = <span className="error">cd: no such file or directory: {target}</span>;
        }
        break;
      case 'ls':
        if (cwd === '/home/aniruddh') {
          output = (
            <div className="ls-output">
              <span className="dir">projects/</span>
              <span className="dir">experience/</span>
              <span className="file">AniruddhRaam_CV.pdf</span>
              <span className="file">README.md</span>
            </div>
          );
        } else if (cwd === '/home/aniruddh/projects') {
          output = (
            <div className="ls-output">
              <span className="file">amrita-portal.ts</span>
              <span className="file">linux-shell.c</span>
              <span className="file">iot-system.cpp</span>
            </div>
          );
        } else if (cwd === '/home/aniruddh/experience') {
          output = (
            <div className="ls-output">
              <span className="file">iiit-research.json</span>
              <span className="file">edeasy.json</span>
            </div>
          );
        } else {
          output = '';
        }
        break;
      case 'pwd':
        output = cwd;
        break;
      case 'whoami':
        output = 'aniruddh';
        break;
      case 'fastfetch':
        output = FASTFETCH_OUTPUT;
        break;
      case 'echo':
        output = args.slice(1).join(' ');
        break;
      case 'date':
        output = new Date().toString();
        break;
      case 'help':
        output = (
          <div>
            Available commands: clear, ls, pwd, cd, whoami, fastfetch, echo, date, help
          </div>
        );
        break;
      default:
        output = <span className="error">zsh: command not found: {baseCmd}</span>;
    }

    setHistory(prev => [...prev, { command: `${promptStr} ${trimmed}`, output }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="ghostty-terminal" onClick={e => { e.stopPropagation(); inputRef.current?.focus(); }}>
        <div className="ghostty-header">
          <div className="window-title">aniruddh@aniruddh: {displayDir}</div>
        </div>
        <div className="ghostty-content">
          {history.map((item, i) => (
            <div key={i} className="history-item">
              <div className="prompt">
                <span className="cmd-text">{item.command}</span>
              </div>
              <div className="cmd-output">{item.output}</div>
            </div>
          ))}
          <form className="prompt-form" onSubmit={onSubmit}>
            <span className="user-host">{promptStr}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="terminal-input"
              spellCheck={false}
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};
