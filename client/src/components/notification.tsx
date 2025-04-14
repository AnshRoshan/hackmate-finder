import type React from 'react';
import { useState } from 'react';

interface NotificationProps {
    id: string;
    type: 'connection' | 'message' | 'event' | 'system';
    title: string;
    message: string;
    time: string;
    read: boolean;
    sender?: {
        name: string;
        avatar: string;
    };
    onRead?: (id: string) => void;
    onDelete?: (id: string) => void;
}

export const Notification: React.FC<NotificationProps> = ({
    id,
    type,
    title,
    message,
    time,
    read,
    sender,
    onRead,
    onDelete
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const getTypeIcon = () => {
        switch (type) {
            case 'connection':
                return <i className="pi pi-user-plus text-purple-400" />;
            case 'message':
                return <i className="pi pi-envelope text-indigo-400" />;
            case 'event':
                return <i className="pi pi-calendar text-blue-400" />;
            default:
                return <i className="pi pi-info-circle text-gray-400" />;
        }
    };

    const handleRead = () => {
        if (onRead && !read) {
            onRead(id);
        }
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onDelete) {
            onDelete(id);
        }
    };

    return (
        <div
            className={`relative group w-full p-4 mb-3 rounded-xl transition-all duration-300
                ${read ? 'bg-gray-800/50' : 'bg-gray-800/80'}
                backdrop-blur-md border 
                ${read ? 'border-white/5' : 'border-purple-500/30'}
                ${!read ? 'shadow-[0_0_15px_rgba(139,92,246,0.1)]' : 'shadow-lg'}`}
            onClick={handleRead}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Unread indicator */}
            {!read && (
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full
                       border border-white/10 shadow-[0_0_5px_rgba(139,92,246,0.5)]" />
            )}

            <div className="flex items-start gap-3">
                {/* Sender avatar or type icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full overflow-hidden
                       ${sender ? 'border border-white/10' : 'bg-gray-700/60 flex items-center justify-center'}
                       ${!read && sender ? 'border-purple-500/20' : ''}`}>
                    {sender ? (
                        <img src={sender.avatar} alt={sender.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            {getTypeIcon()}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                        <h3 className="font-medium text-white truncate">
                            {title}
                        </h3>
                        <span className="text-xs text-gray-400">{time}</span>
                    </div>

                    {sender && (
                        <p className="text-sm text-purple-300 mb-1">{sender.name}</p>
                    )}

                    <p className="text-sm text-gray-300 line-clamp-2">
                        {message}
                    </p>
                </div>
            </div>

            {/* Action buttons */}
            <div className={`absolute right-2 top-1/2 -translate-y-1/2 flex gap-2 transition-opacity duration-300
                     ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                {!read && (
                    <button
                        className="w-8 h-8 rounded-full flex items-center justify-center
                     bg-gray-700/70 border border-white/10 hover:border-purple-400/50
                     text-gray-300 hover:text-purple-400 transition-all
                     shadow-md hover:shadow-[0_0_8px_rgba(139,92,246,0.3)]"
                        title="Mark as read"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleRead();
                        }}
                    >
                        <i className="pi pi-check text-sm" />
                    </button>
                )}
                <button
                    className="w-8 h-8 rounded-full flex items-center justify-center
                   bg-gray-700/70 border border-white/10 hover:border-red-400/50
                   text-gray-300 hover:text-red-400 transition-all
                   shadow-md hover:shadow-[0_0_8px_rgba(248,113,113,0.3)]"
                    title="Delete notification"
                    onClick={handleDelete}
                >
                    <i className="pi pi-trash text-sm" />
                </button>
            </div>
        </div>
    );
};

// Notification container component
export const NotificationPanel: React.FC = () => {
    // Mock data for demonstration
    const [notifications, setNotifications] = useState<NotificationProps[]>([
        {
            id: '1',
            type: 'connection',
            title: 'New Connection Request',
            message: 'Sarah Chen wants to connect with you. You share 5 skills including React and Node.js.',
            time: '2m ago',
            read: false,
            sender: {
                name: 'Sarah Chen',
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
            }
        },
        {
            id: '2',
            type: 'message',
            title: 'New Message',
            message: 'Hey! I saw your profile and I think we would make a great team for the upcoming hackathon. Want to discuss ideas?',
            time: '1h ago',
            read: false,
            sender: {
                name: 'Alex Johnson',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
            }
        },
        {
            id: '3',
            type: 'event',
            title: 'Upcoming Hackathon',
            message: 'The Global Tech Hackathon starts in 3 days. Complete your profile to maximize your matching potential!',
            time: '5h ago',
            read: true
        },
        {
            id: '4',
            type: 'system',
            title: 'Profile Match Update',
            message: 'We found 3 new potential teammates based on your updated skills. Check your matches page.',
            time: '1d ago',
            read: true
        }
    ]);

    const handleReadNotification = (id: string) => {
        setNotifications(notifications.map(notification =>
            notification.id === id ? { ...notification, read: true } : notification
        ));
    };

    const handleDeleteNotification = (id: string) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="p-1 rounded-xl border border-white/10 bg-gray-900/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/5">
                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                        Notifications
                        {unreadCount > 0 && (
                            <span className="ml-2 px-2 py-0.5 bg-purple-600/80 rounded-full text-xs text-white border border-purple-500/30">
                                {unreadCount} new
                            </span>
                        )}
                    </h2>
                    <div className="flex gap-2">
                        {unreadCount > 0 && (
                            <button
                                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                onClick={() => {
                                    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
                                }}
                            >
                                Mark all as read
                            </button>
                        )}
                    </div>
                </div>

                {/* Body */}
                <div className="max-h-[450px] overflow-y-auto p-4">
                    {notifications.length > 0 ? (
                        notifications.map(notification => (
                            <Notification
                                key={notification.id}
                                {...notification}
                                onRead={handleReadNotification}
                                onDelete={handleDeleteNotification}
                            />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                                <i className="pi pi-bell text-2xl text-gray-500" />
                            </div>
                            <p className="text-gray-400">No notifications yet</p>
                            <p className="text-sm text-gray-500 mt-1">When you have new matches or messages, they'll appear here</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-white/5 flex justify-center">
                    <button className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                        Notification Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationPanel;