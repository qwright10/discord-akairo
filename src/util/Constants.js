const multiply = (single, multiple) => (isMultiple) => isMultiple ? multiple : single;

module.exports = {
    ArgumentMatches: {
        PHRASE: Symbol('phrase'),
        FLAG: Symbol('flag'),
        OPTION: Symbol('option'),
        REST: Symbol('rest'),
        SEPARATE: Symbol('separate'),
        TEXT: Symbol('text'),
        CONTENT: Symbol('content'),
        REST_CONTENT: Symbol('restContent'),
        NONE: Symbol('none')
    },
    ArgumentTypeResolver: {
        String: (type) => {
            if (type === 'uppercase') return this.ArgumentTypes.UPPERCASE;
            if (type === 'lowercase') return this.ArgumentTypes.LOWERCASE;
            return this.ArgumentTypes.STRING;
        },
        Number: (type) => {
            if (type === 'integer') return this.ArgumentTypes.INTEGER;
            if (type === 'bigint') return this.ArgumentTypes.BIGINT;
            return this.ArgumentTypes.NUMBER;
        },
        URL: this.ArgumentTypes.URL,
        Date: this.ArgumentTypes.Date,
        Color: this.ArgumentTypes.Color,
        User: multiply(this.ArgumentTypes.USER, this.ArgumentTypes.USERS),
        Member: multiply(this.ArgumentTypes.MEMBER, this.ArgumentTypes.MEMBERS),
        Relevant: multiply(this.ArgumentTypes.RELEVANT, this.ArgumentTypes.RELEVANTS),
        Channel: {
            Any: multiply(this.ArgumentTypes.CHANNEL, this.ArgumentTypes.CHANNELS),
            Text: multiply(this.ArgumentTypes.TEXT_CHANNEL, this.ArgumentTypes.TEXT_CHANNELS),
            Voice: multiply(this.ArgumentTypes.VOICE_CHANNEL, this.ArgumentTypes.VOICE_CHANNELS),
            Category: multiply(this.ArgumentTypes.CATEGORY_CHANNEL, this.ArgumentTypes.CATEGORY_CHANNELS),
            News: multiply(this.ArgumentTypes.NEWS_CHANNEL, this.ArgumentTypes.NEWS_CHANNELS),
            Store: multiply(this.ArgumentTypes.STORE_CHANNEL, this.ArgumentTypes.STORE_CHANNELS)
        },
        Role: multiply(this.ArgumentTypes.ROLE, this.ArgumentTypes.ROLES),
        Emoji: multiply(this.ArgumentTypes.EMOJI, this.ArgumentTypes.EMOJIS),
        Guild: multiply(this.ArgumentTypes.GUILD, this.ArgumentTypes.GUILDS),
        Message: {
            Any: this.ArgumentTypes.MESSAGE,
            Guild: this.ArgumentTypes.GUILD,
            Relevant: this.ArgumentTypes.RELEVANT_MESSAGE
        },
        Invite: this.ArgumentTypes.INVITE,
        Mention: {
            Member: this.ArgumentTypes.MEMBER_MENTION,
            Channel: this.ArgumentTypes.CHANNEL_MENTION,
            Role: this.ArgumentTypes.ROLE_MENTION,
            Emoji: this.ArgumentTypes.EMOJI_MENTION
        },
        CommandAlias: this.ArgumentTypes.COMMAND_ALIAS,
        Command: this.ArgumentTypes.COMMAND,
        Inhibitor: this.ArgumentTypes.INHIBITOR,
        Listener: this.ArgumentTypes.LISTENER
    },
    ArgumentTypes: {
        STRING: Symbol('string'),
        LOWERCASE: Symbol('lowercase'),
        UPPERCASE: Symbol('uppercase'),
        CHAR_CODES: Symbol('charCodes'),
        NUMBER: Symbol('number'),
        INTEGER: Symbol('integer'),
        BIGINT: Symbol('bigint'),
        EMOJINT: Symbol('emojint'),
        URL: Symbol('url'),
        DATE: Symbol('date'),
        COLOR: Symbol('color'),
        USER: Symbol('user'),
        USERS: Symbol('users'),
        MEMBER: Symbol('member'),
        MEMBERS: Symbol('members'),
        RELEVANT: Symbol('relevant'),
        RELEVANTS: Symbol('relevants'),
        CHANNEL: Symbol('channel'),
        CHANNELS: Symbol('channels'),
        TEXT_CHANNEL: Symbol('textChannel'),
        TEXT_CHANNELS: Symbol('textChannels'),
        VOICE_CHANNEL: Symbol('voiceChannel'),
        VOICE_CHANNELS: Symbol('voiceChannels'),
        CATEGORY_CHANNEL: Symbol('categoryChannel'),
        CATEGORY_CHANNELS: Symbol('categoryChannels'),
        NEWS_CHANNEL: Symbol('newsChannel'),
        NEWS_CHANNELS: Symbol('newsChannels'),
        STORE_CHANNEL: Symbol('storeChannel'),
        STORE_CHANNELS: Symbol('storeChannels'),
        ROLE: Symbol('role'),
        ROLES: Symbol('roles'),
        EMOJI: Symbol('emoji'),
        EMOJIS: Symbol('emojis'),
        GUILD: Symbol('guild'),
        GUILDS: Symbol('guilds'),
        MESSAGE: Symbol('message'),
        GUILD_MESSAGE: Symbol('guildMessage'),
        RELEVANT_MESSAGE: Symbol('relevantMessage'),
        INVITE: Symbol('invite'),
        MEMBER_MENTION: Symbol('memberMention'),
        CHANNEL_MENTION: Symbol('channelMention'),
        ROLE_MENTION: Symbol('roleMention'),
        EMOJI_MENTION: Symbol('emojiMention'),
        COMMAND_ALIAS: Symbol('commandAlias'),
        COMMAND: Symbol('command'),
        INHIBITOR: Symbol('inhibitor'),
        LISTENER: Symbol('listener')
    },
    AkairoHandlerEvents: {
        LOAD: 'load',
        REMOVE: 'remove'
    },
    CommandHandlerEvents: {
        MESSAGE_BLOCKED: 'messageBlocked',
        MESSAGE_INVALID: 'messageInvalid',
        COMMAND_BLOCKED: 'commandBlocked',
        COMMAND_STARTED: 'commandStarted',
        COMMAND_FINISHED: 'commandFinished',
        COMMAND_CANCELLED: 'commandCancelled',
        COMMAND_LOCKED: 'commandLocked',
        MISSING_PERMISSIONS: 'missingPermissions',
        COOLDOWN: 'cooldown',
        IN_PROMPT: 'inPrompt',
        ERROR: 'error'
    },
    BuiltInReasons: {
        CLIENT: 'client',
        BOT: 'bot',
        OWNER: 'owner',
        GUILD: 'guild',
        DM: 'dm'
    }
};
