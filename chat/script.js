const { useState, useEffect, useRef } = React;

// --- ICONS ---
const IconUser = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconLink = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const IconCopy = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>;
const IconSend = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const IconLoader = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;
const IconAlert = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
const IconLogOut = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const IconCheck = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const IconShield = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconPaperclip = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;
const IconVideo = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>;
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconMonitor = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const IconSmile = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>;
const IconPhoneOff = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="23" y1="1" x2="1" y2="23"/></svg>;
const IconMic = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>;
const IconMicOff = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>;
const IconSpeaker = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>;
const IconSpeakerOff = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>;

// --- CONFIGURATION ---
const PEER_CONFIG = {
    host: '0.peerjs.com',
    port: 443,
    secure: true,
    pingInterval: 5000,
    config: {
        iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            { urls: 'stun:stun2.l.google.com:19302' },
            { urls: 'stun:stun3.l.google.com:19302' },
            { urls: 'stun:stun4.l.google.com:19302' }
        ]
    }
};

// --- UI COMPONENTS ---
const Layout = ({ children }) => (
    <div className="min-h-[100dvh] flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden relative transition-all duration-500">
            {children}
        </div>
    </div>
);

// --- TYPING INDICATOR COMPONENT ---
const TypingIndicator = () => (
    <div className="flex items-center gap-1 px-3 py-2 bg-slate-100 rounded-full w-fit">
        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
    </div>
);

const App = () => {
    // App State
    const [step, setStep] = useState('landing');
    const [role, setRole] = useState('host');
    const [myPeerId, setMyPeerId] = useState('');
    const [username, setUsername] = useState('');
    const [targetName, setTargetName] = useState('');
    const [targetPeerId, setTargetPeerId] = useState('');
    const [qrCodeData, setQrCodeData] = useState(null);
    
    // Chat State
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [showEmoji, setShowEmoji] = useState(false);
    const [peerIsTyping, setPeerIsTyping] = useState(false);
    
    // Connection State
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [isBusy, setIsBusy] = useState(false); 

    // Call State
    const [incomingCall, setIncomingCall] = useState(null);
    const [callActive, setCallActive] = useState(false);
    const [callMode, setCallMode] = useState(null); // 'voice', 'video', 'screen'
    const [myStream, setMyStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [isMuted, setIsMuted] = useState(false); 
    const [isSpeakerMuted, setIsSpeakerMuted] = useState(false); 

    // Refs
    const peerRef = useRef(null);
    const connRef = useRef(null);
    const chatBoxRef = useRef(null);
    const fileInputRef = useRef(null);
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const currentCallRef = useRef(null);
    const callStartTimeRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    // --- INITIALIZATION ---
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const room = params.get('room');
        const name = params.get('name');
        
        if (room && name) {
            setRole('guest');
            setTargetPeerId(room);
            setTargetName(decodeURIComponent(name));
            setStep('joining');
        }

        return () => {
            if (peerRef.current) peerRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [chatHistory, peerIsTyping]);

    // --- PEER JS SETUP ---
    const setupPeer = () => {
        const peer = new window.Peer(PEER_CONFIG);
        peerRef.current = peer;

        peer.on('error', (err) => {
            console.error("PeerJS Error:", err);
            let niceError = "Connection failed.";
            if (err.type === 'peer-unavailable') niceError = "Peer not found. They may be offline.";
            if (err.type === 'browser-incompatible') niceError = "Browser incompatible. Use Chrome/Safari.";
            if (err.type === 'network') niceError = "Firewall detected. Try mobile data or different WiFi.";
            
            setError(niceError);
            setIsBusy(false);
            if (err.type === 'disconnected') setTimeout(() => peer.reconnect(), 1000);
        });

        peer.on('connection', (conn) => {
            if (connRef.current && connRef.current.open) connRef.current.close();
            
            connRef.current = conn;
            setupConnectionEvents(conn);
        });

        peer.on('call', (call) => {
            setIncomingCall(call);
        });

        return peer;
    };

    const initializeHost = () => {
        if (!username.trim()) return setError("Please enter a username.");
        if (isBusy) return; 

        setError('');
        setStatus('Securing connection...');
        setIsBusy(true);
        
        const peer = setupPeer();

        peer.on('open', (id) => {
            setMyPeerId(id);
            setStep('waiting');
            setStatus('Ready to connect.');
            setIsBusy(false);
            
            const inviteLink = `${window.location.origin}${window.location.pathname}?room=${id}&name=${encodeURIComponent(username)}`;
            
            if (window.QRCode) {
                try {
                    window.QRCode.toDataURL(inviteLink, {
                        width: 300,
                        margin: 2,
                        color: {
                            dark: '#475569',
                            light: '#ffffff'
                        }
                    })
                    .then(url => {
                        setQrCodeData(url);
                    })
                    .catch(err => {
                        console.error('QR Code error:', err);
                    });
                } catch (e) {
                    console.error("QR Lib error:", e);
                }
            }
        });
    };

    const joinChat = () => {
        if (!username.trim()) return setError("Please enter a username.");
        if (isBusy) return;

        setError('');
        setStatus(`Connecting securely to ${targetName}...`);
        setIsBusy(true);

        const peer = setupPeer();

        peer.on('open', (id) => {
            setMyPeerId(id);
            const conn = peer.connect(targetPeerId, {
                metadata: { username: username },
                reliable: true
            });
            connRef.current = conn;
            setupConnectionEvents(conn);
            setIsBusy(false);
        });
    };

    const setupConnectionEvents = (conn) => {
        conn.on('open', () => {
            setIsConnected(true);
            setStep('chat');
            setPeerIsTyping(false);
            
            if (role === 'host' && conn.metadata) {
                setTargetName(conn.metadata.username);
                conn.send({ type: 'handshake', name: username });
            }
        });

        conn.on('data', (data) => {
            if (data.type === 'message') {
                setPeerIsTyping(false);
                setChatHistory(prev => [...prev, { sender: 'them', type: 'text', text: data.text, time: new Date() }]);
            } else if (data.type === 'typing') {
                setPeerIsTyping(data.isTyping);
            } else if (data.type === 'image') {
                 setPeerIsTyping(false);
                setChatHistory(prev => [...prev, { sender: 'them', type: 'image', image: data.image, time: new Date() }]);
            } else if (data.type === 'system') {
                setChatHistory(prev => [...prev, { sender: 'system', text: data.text, time: new Date() }]);
            } else if (data.type === 'call-rejected') {
                setIncomingCall(null);
                setCallActive(false);
                if (currentCallRef.current) currentCallRef.current.close();
                if (myStream) myStream.getTracks().forEach(track => track.stop());
                setMyStream(null);
                setRemoteStream(null);
                alert('Call declined.');
            }
        });

        conn.on('close', () => {
            setIsConnected(false);
            setCallActive(false);
            setPeerIsTyping(false);
            alert(`${targetName || 'User'} has left the chat.`);
            window.location.href = window.location.pathname; 
        });
    };

    // --- MESSAGING FUNCTIONS ---
    
    const handleInputChange = (e) => {
        const newVal = e.target.value;
        setMessage(newVal);

        if (connRef.current && isConnected) {
            connRef.current.send({ type: 'typing', isTyping: true });

            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

            typingTimeoutRef.current = setTimeout(() => {
                if (connRef.current && isConnected) {
                    connRef.current.send({ type: 'typing', isTyping: false });
                }
            }, 1500);
        }
    };

    const sendMessage = (e) => {
        e && e.preventDefault();
        if (!message.trim() || !isConnected) return;

        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        const msgData = { type: 'message', text: message };
        connRef.current.send(msgData);
        connRef.current.send({ type: 'typing', isTyping: false });

        setChatHistory(prev => [...prev, { sender: 'me', type: 'text', text: message, time: new Date() }]);
        setMessage('');
        setShowEmoji(false);
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 1.5 * 1024 * 1024) {
            alert("Image is too large. Please select an image under 1.5MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            connRef.current.send({ type: 'image', image: base64 });
            setChatHistory(prev => [...prev, { sender: 'me', type: 'image', image: base64, time: new Date() }]);
        };
        reader.readAsDataURL(file);
    };

    const addEmoji = (emoji) => {
        const newMsg = message + emoji;
        handleInputChange({ target: { value: newMsg }});
    };

    // --- CALLING FUNCTIONS ---
    
    const startCall = (mode) => {
        if (callActive) return; 
        
        if (myStream) {
            myStream.getTracks().forEach(track => track.stop());
        }

        setCallMode(mode);
        setIsMuted(false);
        setIsSpeakerMuted(false);

        const getMedia = () => {
            if (mode === 'screen') {
                return navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
            } else {
                return navigator.mediaDevices.getUserMedia({ 
                    video: mode === 'video', 
                    audio: true 
                });
            }
        };

        getMedia()
            .then((stream) => {
                setMyStream(stream);
                setCallActive(true);
                callStartTimeRef.current = Date.now();
                
                const startMsg = `${mode.charAt(0).toUpperCase() + mode.slice(1)} call started`;
                setChatHistory(prev => [...prev, { sender: 'system', text: startMsg, time: new Date() }]);
                connRef.current.send({ type: 'system', text: startMsg });
                
                const call = peerRef.current.call(targetPeerId || (role === 'host' ? connRef.current.peer : targetPeerId), stream, {
                        metadata: { mode: mode }
                });
                currentCallRef.current = call;
                
                call.on('stream', (remoteStream) => {
                    setRemoteStream(remoteStream);
                });
                
                call.on('close', endCall);
            })
            .catch(err => {
                console.error("Failed to get local stream", err);
                alert("Could not access camera/microphone/screen.");
                setCallActive(false); 
            });
    };

    const answerCall = () => {
        const incomingMode = incomingCall.metadata?.mode || 'video';
        setCallMode(incomingMode);
        setIsMuted(false);
        setIsSpeakerMuted(false);

        const mediaConstraints = {
            video: incomingMode === 'video' || incomingMode === 'screen', 
            audio: true
        };
        
        if (incomingMode === 'voice') mediaConstraints.video = false;

        navigator.mediaDevices.getUserMedia(mediaConstraints)
            .then((stream) => {
                setMyStream(stream);
                setCallActive(true);
                setIncomingCall(null);
                callStartTimeRef.current = Date.now();
                
                incomingCall.answer(stream);
                currentCallRef.current = incomingCall;
                
                incomingCall.on('stream', (remoteStream) => {
                    setRemoteStream(remoteStream);
                });
                
                incomingCall.on('close', endCall);
            })
            .catch(err => {
                console.error("Failed to answer", err);
                setIncomingCall(null);
            });
    };

    const rejectCall = () => {
        if (connRef.current && isConnected) {
            connRef.current.send({ type: 'call-rejected' });
        }
        incomingCall.close();
        setIncomingCall(null);
    };

    const toggleMic = () => {
        if (myStream) {
            const audioTrack = myStream.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setIsMuted(!audioTrack.enabled);
            }
        }
    };

    const toggleSpeaker = () => {
        if (remoteVideoRef.current) {
            remoteVideoRef.current.muted = !remoteVideoRef.current.muted;
            setIsSpeakerMuted(remoteVideoRef.current.muted);
        }
    };

    const formatDuration = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const endCall = () => {
        if (callStartTimeRef.current) {
            const duration = Date.now() - callStartTimeRef.current;
            const durationStr = formatDuration(duration);
            const endMsg = `Call ended • ${durationStr}`;
            
            if (callActive) {
                setChatHistory(prev => [...prev, { sender: 'system', text: endMsg, time: new Date() }]);
                if(connRef.current && isConnected) connRef.current.send({ type: 'system', text: endMsg });
            }
            callStartTimeRef.current = null;
        }

        if (currentCallRef.current) currentCallRef.current.close();
        if (myStream) myStream.getTracks().forEach(track => track.stop());
        
        setCallActive(false);
        setMyStream(null);
        setRemoteStream(null);
        setIncomingCall(null);
        setCallMode(null);
        setIsMuted(false);
        setIsSpeakerMuted(false);
    };

    useEffect(() => {
        if (callActive) {
            if (localVideoRef.current && myStream) {
                localVideoRef.current.srcObject = myStream;
            }
            if (remoteVideoRef.current && remoteStream) {
                remoteVideoRef.current.srcObject = remoteStream;
                remoteVideoRef.current.muted = isSpeakerMuted;
            }
        }
    }, [callActive, myStream, remoteStream]);
    
    useEffect(() => {
        if (remoteVideoRef.current) {
            remoteVideoRef.current.muted = isSpeakerMuted;
        }
    }, [isSpeakerMuted]);


    // --- UTILS ---
    const copyLink = () => {
        const url = `${window.location.origin}${window.location.pathname}?room=${myPeerId}&name=${encodeURIComponent(username)}`;
        navigator.clipboard.writeText(url).then(() => setStatus('Link copied!'));
        setTimeout(() => setStatus('Waiting for connection...'), 3000);
    };

    const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // --- RENDERING ---
    
    // Call Overlay Component
    const CallOverlay = () => {
        if (!callActive) return null;
        
        const isVoiceOnly = callMode === 'voice';

        return (
            <div className="fixed inset-0 z-50 bg-slate-900 flex flex-col">
                <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
                    {isVoiceOnly ? (
                        <div className="flex flex-col items-center justify-center animate-pulse">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-4xl text-white font-bold shadow-[0_0_40px_rgba(99,102,241,0.5)] mb-4">
                                {targetName.charAt(0).toUpperCase()}
                            </div>
                            <div className="text-white text-xl font-semibold tracking-wider">
                                {targetName}
                            </div>
                            <div className="text-slate-400 text-sm mt-2">Voice Call Active</div>
                        </div>
                    ) : (
                        <video 
                            ref={remoteVideoRef} 
                            autoPlay 
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    )}
                    
                        {isVoiceOnly && (
                        <video ref={remoteVideoRef} autoPlay playsInline className="hidden" />
                        )}

                    {!isVoiceOnly && (
                        <div className="absolute top-4 right-4 w-28 h-40 md:w-32 md:h-48 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-white/20">
                            <video 
                                ref={localVideoRef} 
                                autoPlay 
                                muted 
                                playsInline
                                className="w-full h-full object-cover transform -scale-x-100" 
                            />
                        </div>
                    )}

                    <div className="absolute top-6 left-6 text-white bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        {targetName} • {callMode === 'screen' ? 'Screen Sharing' : (callMode === 'voice' ? 'Voice' : 'Video')}
                    </div>
                </div>

                <div className="h-28 bg-slate-900/90 backdrop-blur-md flex items-center justify-center gap-6 pb-6 pt-4">
                        <button 
                        onClick={toggleMic}
                        className={`p-4 rounded-full transition-all ${isMuted ? 'bg-white text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                    >
                        {isMuted ? <IconMicOff /> : <IconMic />}
                    </button>
                    
                    <button 
                        onClick={endCall}
                        className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30 transform active:scale-95 transition-all"
                    >
                        <IconPhoneOff />
                    </button>

                    <button 
                        onClick={toggleSpeaker}
                        className={`p-4 rounded-full transition-all ${isSpeakerMuted ? 'bg-white text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                    >
                        {isSpeakerMuted ? <IconSpeakerOff /> : <IconSpeaker />}
                    </button>
                </div>
            </div>
        );
    };

    const IncomingCallModal = () => {
        if (!incomingCall) return null;
        const mode = incomingCall.metadata?.mode || 'video';
        
        return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-sm text-center animate-bounce-slight relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    
                    <div className="w-24 h-24 bg-indigo-50 rounded-full mx-auto flex items-center justify-center mb-5 relative">
                        <div className="absolute inset-0 border-4 border-indigo-100 rounded-full ring-animate"></div>
                        {mode === 'voice' ? <IconPhone /> : <IconVideo />}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{incomingCall.metadata?.username || 'Peer'}</h3>
                    <p className="text-slate-500 mb-8 font-medium">Incoming {mode} call...</p>
                    
                    <div className="flex justify-center gap-6">
                        <button onClick={rejectCall} className="flex flex-col items-center gap-2 group">
                            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors shadow-sm">
                                <IconPhoneOff />
                            </div>
                            <span className="text-xs font-medium text-slate-500">Decline</span>
                        </button>
                        
                        <button onClick={answerCall} className="flex flex-col items-center gap-2 group">
                            <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center group-hover:bg-green-600 shadow-lg shadow-green-200 transition-colors animate-pulse">
                                {mode === 'voice' ? <IconPhone /> : <IconVideo />}
                            </div>
                            <span className="text-xs font-medium text-slate-500">Accept</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // Main Views
    if (step === 'landing') {
        return (
            <Layout>
                <div className="p-10 text-center">
                    <div className="mx-auto bg-gradient-to-tr from-indigo-600 to-purple-600 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-indigo-200 animate-float">
                        <div className="text-white"><IconShield /></div>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800 mb-3 tracking-tight">Private Chat</h1>
                    <p className="text-slate-500 mb-10 leading-relaxed max-w-[260px] mx-auto">
                        Secure. Video. Images.<br/>
                        <span className="text-xs font-medium text-slate-400">No servers. No history.</span>
                    </p>
                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"><IconUser /></div>
                            <input autoFocus type="text" placeholder="Choose your alias" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && initializeHost()} />
                        </div>
                        {error && <div className="text-rose-500 text-sm flex items-center justify-center gap-2 bg-rose-50 py-2 rounded-xl"><IconAlert /> {error}</div>}
                        <button disabled={isBusy} onClick={initializeHost} className="w-full bg-slate-900 hover:bg-black active:scale-[0.98] text-white font-semibold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                            {isBusy ? <div className="w-5 h-5"><IconLoader /></div> : 'Create Secure Room'}
                        </button>
                    </div>
                </div>
            </Layout>
        );
    }

    if (step === 'waiting') {
        return (
            <Layout>
                <div className="p-10 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-1">Room Ready</h2>
                    <p className="text-slate-500 mb-6 text-sm">Scan QR or share link to join.</p>
                    
                    {/* QR Code Section */}
                    <div className="mb-6 flex justify-center">
                        <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            {qrCodeData ? (
                                <img src={qrCodeData} alt="Room QR Code" className="w-48 h-48 object-contain rounded-lg" />
                            ) : (
                                <div className="w-48 h-48 flex items-center justify-center text-slate-300">
                                    <div className="animate-spin text-indigo-500"><IconLoader /></div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl mb-4 text-left relative group hover:border-indigo-300 transition-colors">
                        <div className="text-[10px] text-slate-400 mb-1 uppercase tracking-wider font-bold">Private Invite Link</div>
                        <div className="text-sm text-slate-600 font-mono truncate pr-10 opacity-70">{window.location.origin}{window.location.pathname}?room={myPeerId}...</div>
                    </div>
                    
                    <button onClick={copyLink} className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 mb-6">{status === 'Link copied!' ? <IconCheck/> : <IconCopy />} {status === 'Link copied!' ? 'Copied' : 'Copy Link'}</button>
                    
                    <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 bg-slate-50 py-2.5 px-4 rounded-full inline-flex"><div className="w-4 h-4 text-indigo-500"><IconLoader /></div> {status === 'Link copied!' ? 'Waiting for peer...' : 'Initializing secure handshake...'}</div>
                </div>
            </Layout>
        );
    }

    if (step === 'joining') {
        return (
            <Layout>
                <div className="p-10 text-center">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center rotate-6 shadow-sm">
                        <div className="-rotate-6"><IconUser /></div>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800 mb-2">Join Private Chat</h1>
                    <p className="text-slate-500 mb-8">Connecting securely to <span className="font-semibold text-purple-600">{targetName}</span></p>
                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-600 transition-colors"><IconUser /></div>
                            <input autoFocus type="text" placeholder="Your Alias" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && joinChat()} />
                        </div>
                        {error && <div className="text-rose-500 text-sm flex items-center justify-center gap-2 bg-rose-50 py-2 rounded-xl"><IconAlert /> {error}</div>}
                        <button disabled={isBusy} onClick={joinChat} className="w-full bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-purple-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">{isBusy || status.includes('Connecting') ? <div className="w-5 h-5"><IconLoader /></div> : 'Join Securely'}</button>
                    </div>
                </div>
            </Layout>
        );
    }

    // CHAT VIEW
    if (step === 'chat') {
        const EMOJIS = ['👍', '❤️', '😂', '😮', '😢', '🔥', '🎉', '👀'];
        
        return (
            <div className="fixed inset-0 bg-[#f0f2f5] flex flex-col font-sans">
                <CallOverlay />
                <IncomingCallModal />
                
                {/* Header */}
                <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm z-20">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md ${role === 'host' ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gradient-to-br from-purple-500 to-pink-600'}`}>
                            {targetName.charAt(0).toUpperCase()}
                        </div>
                        <div className="leading-tight">
                            <h3 className="font-bold text-slate-800 text-base">{targetName}</h3>
                            <p className="text-[11px] uppercase tracking-wide text-emerald-600 font-bold flex items-center gap-1.5">
                                {isConnected ? <><IconShield /> Secure</> : <span className="text-red-500 flex items-center gap-1"><IconAlert /> Disconnected</span>}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button onClick={() => startCall('voice')} disabled={!isConnected || callActive} className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all disabled:opacity-50" title="Voice Call">
                            <IconPhone />
                        </button>
                        <button onClick={() => startCall('video')} disabled={!isConnected || callActive} className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all disabled:opacity-50" title="Video Call">
                            <IconVideo />
                        </button>
                        <button onClick={() => startCall('screen')} disabled={!isConnected || callActive} className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all hidden md:block disabled:opacity-50" title="Share Screen">
                            <IconMonitor />
                        </button>
                        <div className="w-px h-6 bg-slate-300 mx-1"></div>
                        <button onClick={() => window.location.href = window.location.pathname} className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all" title="End Session">
                            <IconLogOut />
                        </button>
                    </div>
                </header>

                {/* Chat Area */}
                <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f8fafc] custom-scroll">
                    {chatHistory.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-slate-400 opacity-60">
                            <div className="bg-slate-100 p-6 rounded-full mb-4 animate-float"><IconShield /></div>
                            <p className="text-sm font-medium">Encrypted Channel Established.</p>
                            <p className="text-xs mt-1">Start chatting, sharing photos, or calling.</p>
                        </div>
                    ) : (
                        chatHistory.map((msg, index) => {
                            const isMe = msg.sender === 'me';
                            const isSystem = msg.sender === 'system';
                            
                            if (isSystem) {
                                return (
                                    <div key={index} className="flex justify-center my-3 msg-enter">
                                        <span className="bg-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-sm">
                                            {msg.text}
                                        </span>
                                    </div>
                                );
                            }

                            return (
                                <div key={index} className={`flex w-full msg-enter ${isMe ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`
                                        relative max-w-[85%] md:max-w-[70%] px-4 py-3 shadow-sm text-[15px] leading-relaxed
                                        ${isMe 
                                            ? 'bg-indigo-600 text-white rounded-[22px] rounded-tr-md' 
                                            : 'bg-white text-slate-700 rounded-[22px] rounded-tl-md border border-slate-100'}
                                    `}>
                                        {msg.type === 'text' && <div className="break-words">{msg.text}</div>}
                                        {msg.type === 'image' && (
                                            <div className="mb-1">
                                                <img src={msg.image} alt="Shared" className="rounded-lg max-h-60 object-cover" />
                                            </div>
                                        )}
                                        <div className={`text-[10px] font-medium text-right mt-1 opacity-70 ${isMe ? 'text-indigo-100' : 'text-slate-400'}`}>
                                            {formatTime(msg.time)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                    
                    {/* Typing Indicator Bubble */}
                    {peerIsTyping && (
                        <div className="flex w-full msg-enter justify-start">
                            <div className="bg-white px-4 py-3 rounded-[22px] rounded-tl-md border border-slate-100 shadow-sm">
                                <TypingIndicator />
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="bg-white p-3 md:p-4 border-t border-slate-200">
                        {showEmoji && (
                        <div className="absolute bottom-20 left-4 bg-white shadow-xl rounded-2xl p-2 border border-slate-100 grid grid-cols-4 gap-2 animate-fadeIn z-30">
                            {EMOJIS.map(e => (
                                <button key={e} onClick={() => addEmoji(e)} className="text-2xl hover:bg-slate-100 p-2 rounded-lg transition-colors">{e}</button>
                            ))}
                        </div>
                    )}
                    
                    <form onSubmit={sendMessage} className="flex gap-2 items-end max-w-4xl mx-auto">
                        <button type="button" disabled={!isConnected} onClick={() => setShowEmoji(!showEmoji)} className="p-3 text-slate-400 hover:text-yellow-500 transition-colors rounded-full hover:bg-slate-50 disabled:opacity-50"><IconSmile /></button>
                        <button type="button" disabled={!isConnected} onClick={() => fileInputRef.current?.click()} className="p-3 text-slate-400 hover:text-indigo-500 transition-colors rounded-full hover:bg-slate-50 disabled:opacity-50"><IconPaperclip /></button>
                        <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
                        
                        <div className="flex-1 bg-slate-100 rounded-[24px] border-2 border-transparent focus-within:border-indigo-100 focus-within:bg-white transition-all flex items-center overflow-hidden">
                            <input
                                autoFocus
                                type="text"
                                disabled={!isConnected}
                                className="w-full bg-transparent border-0 px-4 py-3.5 focus:ring-0 text-slate-800 placeholder:text-slate-400 outline-none disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed"
                                placeholder={isConnected ? "Type a message..." : "User has left the chat"}
                                value={message}
                                onChange={handleInputChange}
                                autoComplete="off"
                            />
                        </div>
                        <button 
                            type="submit" 
                            disabled={!message.trim() || !isConnected} 
                            className={`
                                w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
                                ${message.trim() && isConnected
                                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white transform hover:scale-105 active:scale-95' 
                                    : 'bg-slate-100 text-slate-300 cursor-default'}
                            `}
                        >
                            <div className={message.trim() ? 'ml-0.5' : ''}><IconSend /></div>
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return null;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
