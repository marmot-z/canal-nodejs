import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace com. */
export namespace com {

    /** Namespace alibaba. */
    namespace alibaba {

        /** Namespace otter. */
        namespace otter {

            /** Namespace canal. */
            namespace canal {

                /** Namespace protocol. */
                namespace protocol {

                    /** Compression enum. */
                    enum Compression {
                        COMPRESSIONCOMPATIBLEPROTO2 = 0,
                        NONE = 1,
                        ZLIB = 2,
                        GZIP = 3,
                        LZF = 4
                    }

                    /** PacketType enum. */
                    enum PacketType {
                        PACKAGETYPECOMPATIBLEPROTO2 = 0,
                        HANDSHAKE = 1,
                        CLIENTAUTHENTICATION = 2,
                        ACK = 3,
                        SUBSCRIPTION = 4,
                        UNSUBSCRIPTION = 5,
                        GET = 6,
                        MESSAGES = 7,
                        CLIENTACK = 8,
                        SHUTDOWN = 9,
                        DUMP = 10,
                        HEARTBEAT = 11,
                        CLIENTROLLBACK = 12
                    }

                    /** Properties of a Packet. */
                    interface IPacket {

                        /** Packet magicNumber */
                        magicNumber?: (number|null);

                        /** Packet version */
                        version?: (number|null);

                        /** Packet type */
                        type?: (com.alibaba.otter.canal.protocol.PacketType|null);

                        /** Packet compression */
                        compression?: (com.alibaba.otter.canal.protocol.Compression|null);

                        /** Packet body */
                        body?: (Uint8Array|null);
                    }

                    /** Represents a Packet. */
                    class Packet implements IPacket {

                        /**
                         * Constructs a new Packet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IPacket);

                        /** Packet magicNumber. */
                        public magicNumber?: (number|null);

                        /** Packet version. */
                        public version?: (number|null);

                        /** Packet type. */
                        public type: com.alibaba.otter.canal.protocol.PacketType;

                        /** Packet compression. */
                        public compression?: (com.alibaba.otter.canal.protocol.Compression|null);

                        /** Packet body. */
                        public body: Uint8Array;

                        /** Packet magicNumberPresent. */
                        public magicNumberPresent?: "magicNumber";

                        /** Packet versionPresent. */
                        public versionPresent?: "version";

                        /** Packet compressionPresent. */
                        public compressionPresent?: "compression";

                        /**
                         * Creates a new Packet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Packet instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IPacket): com.alibaba.otter.canal.protocol.Packet;

                        /**
                         * Encodes the specified Packet message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Packet.verify|verify} messages.
                         * @param message Packet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Packet message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Packet.verify|verify} messages.
                         * @param message Packet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Packet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Packet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Packet;

                        /**
                         * Decodes a Packet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Packet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Packet;

                        /**
                         * Verifies a Packet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Packet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Packet
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Packet;

                        /**
                         * Creates a plain object from a Packet message. Also converts values to other types if specified.
                         * @param message Packet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Packet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Packet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Packet
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a HeartBeat. */
                    interface IHeartBeat {

                        /** HeartBeat sendTimestamp */
                        sendTimestamp?: (number|Long|null);

                        /** HeartBeat startTimestamp */
                        startTimestamp?: (number|Long|null);
                    }

                    /** Represents a HeartBeat. */
                    class HeartBeat implements IHeartBeat {

                        /**
                         * Constructs a new HeartBeat.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IHeartBeat);

                        /** HeartBeat sendTimestamp. */
                        public sendTimestamp: (number|Long);

                        /** HeartBeat startTimestamp. */
                        public startTimestamp: (number|Long);

                        /**
                         * Creates a new HeartBeat instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HeartBeat instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IHeartBeat): com.alibaba.otter.canal.protocol.HeartBeat;

                        /**
                         * Encodes the specified HeartBeat message. Does not implicitly {@link com.alibaba.otter.canal.protocol.HeartBeat.verify|verify} messages.
                         * @param message HeartBeat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HeartBeat message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.HeartBeat.verify|verify} messages.
                         * @param message HeartBeat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HeartBeat message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HeartBeat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.HeartBeat;

                        /**
                         * Decodes a HeartBeat message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HeartBeat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.HeartBeat;

                        /**
                         * Verifies a HeartBeat message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HeartBeat message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HeartBeat
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.HeartBeat;

                        /**
                         * Creates a plain object from a HeartBeat message. Also converts values to other types if specified.
                         * @param message HeartBeat
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.HeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HeartBeat to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for HeartBeat
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Handshake. */
                    interface IHandshake {

                        /** Handshake communicationEncoding */
                        communicationEncoding?: (string|null);

                        /** Handshake seeds */
                        seeds?: (Uint8Array|null);

                        /** Handshake supportedCompressions */
                        supportedCompressions?: (com.alibaba.otter.canal.protocol.Compression|null);
                    }

                    /** Represents a Handshake. */
                    class Handshake implements IHandshake {

                        /**
                         * Constructs a new Handshake.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IHandshake);

                        /** Handshake communicationEncoding. */
                        public communicationEncoding?: (string|null);

                        /** Handshake seeds. */
                        public seeds: Uint8Array;

                        /** Handshake supportedCompressions. */
                        public supportedCompressions: com.alibaba.otter.canal.protocol.Compression;

                        /** Handshake communicationEncodingPresent. */
                        public communicationEncodingPresent?: "communicationEncoding";

                        /**
                         * Creates a new Handshake instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Handshake instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IHandshake): com.alibaba.otter.canal.protocol.Handshake;

                        /**
                         * Encodes the specified Handshake message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Handshake.verify|verify} messages.
                         * @param message Handshake message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Handshake message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Handshake.verify|verify} messages.
                         * @param message Handshake message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Handshake message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Handshake
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Handshake;

                        /**
                         * Decodes a Handshake message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Handshake
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Handshake;

                        /**
                         * Verifies a Handshake message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Handshake message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Handshake
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Handshake;

                        /**
                         * Creates a plain object from a Handshake message. Also converts values to other types if specified.
                         * @param message Handshake
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Handshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Handshake to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Handshake
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ClientAuth. */
                    interface IClientAuth {

                        /** ClientAuth username */
                        username?: (string|null);

                        /** ClientAuth password */
                        password?: (Uint8Array|null);

                        /** ClientAuth netReadTimeout */
                        netReadTimeout?: (number|null);

                        /** ClientAuth netWriteTimeout */
                        netWriteTimeout?: (number|null);

                        /** ClientAuth destination */
                        destination?: (string|null);

                        /** ClientAuth clientId */
                        clientId?: (string|null);

                        /** ClientAuth filter */
                        filter?: (string|null);

                        /** ClientAuth startTimestamp */
                        startTimestamp?: (number|Long|null);
                    }

                    /** Represents a ClientAuth. */
                    class ClientAuth implements IClientAuth {

                        /**
                         * Constructs a new ClientAuth.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IClientAuth);

                        /** ClientAuth username. */
                        public username: string;

                        /** ClientAuth password. */
                        public password: Uint8Array;

                        /** ClientAuth netReadTimeout. */
                        public netReadTimeout?: (number|null);

                        /** ClientAuth netWriteTimeout. */
                        public netWriteTimeout?: (number|null);

                        /** ClientAuth destination. */
                        public destination: string;

                        /** ClientAuth clientId. */
                        public clientId: string;

                        /** ClientAuth filter. */
                        public filter: string;

                        /** ClientAuth startTimestamp. */
                        public startTimestamp: (number|Long);

                        /** ClientAuth netReadTimeoutPresent. */
                        public netReadTimeoutPresent?: "netReadTimeout";

                        /** ClientAuth netWriteTimeoutPresent. */
                        public netWriteTimeoutPresent?: "netWriteTimeout";

                        /**
                         * Creates a new ClientAuth instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClientAuth instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IClientAuth): com.alibaba.otter.canal.protocol.ClientAuth;

                        /**
                         * Encodes the specified ClientAuth message. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientAuth.verify|verify} messages.
                         * @param message ClientAuth message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IClientAuth, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClientAuth message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientAuth.verify|verify} messages.
                         * @param message ClientAuth message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IClientAuth, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClientAuth message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClientAuth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.ClientAuth;

                        /**
                         * Decodes a ClientAuth message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClientAuth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.ClientAuth;

                        /**
                         * Verifies a ClientAuth message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClientAuth message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClientAuth
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.ClientAuth;

                        /**
                         * Creates a plain object from a ClientAuth message. Also converts values to other types if specified.
                         * @param message ClientAuth
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.ClientAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClientAuth to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClientAuth
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Ack. */
                    interface IAck {

                        /** Ack errorCode */
                        errorCode?: (number|null);

                        /** Ack errorMessage */
                        errorMessage?: (string|null);
                    }

                    /** Represents an Ack. */
                    class Ack implements IAck {

                        /**
                         * Constructs a new Ack.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IAck);

                        /** Ack errorCode. */
                        public errorCode?: (number|null);

                        /** Ack errorMessage. */
                        public errorMessage: string;

                        /** Ack errorCodePresent. */
                        public errorCodePresent?: "errorCode";

                        /**
                         * Creates a new Ack instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Ack instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IAck): com.alibaba.otter.canal.protocol.Ack;

                        /**
                         * Encodes the specified Ack message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Ack.verify|verify} messages.
                         * @param message Ack message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Ack message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Ack.verify|verify} messages.
                         * @param message Ack message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IAck, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Ack message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Ack
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Ack;

                        /**
                         * Decodes an Ack message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Ack
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Ack;

                        /**
                         * Verifies an Ack message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Ack
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Ack;

                        /**
                         * Creates a plain object from an Ack message. Also converts values to other types if specified.
                         * @param message Ack
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Ack to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Ack
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ClientAck. */
                    interface IClientAck {

                        /** ClientAck destination */
                        destination?: (string|null);

                        /** ClientAck clientId */
                        clientId?: (string|null);

                        /** ClientAck batchId */
                        batchId?: (number|Long|null);
                    }

                    /** Represents a ClientAck. */
                    class ClientAck implements IClientAck {

                        /**
                         * Constructs a new ClientAck.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IClientAck);

                        /** ClientAck destination. */
                        public destination: string;

                        /** ClientAck clientId. */
                        public clientId: string;

                        /** ClientAck batchId. */
                        public batchId: (number|Long);

                        /**
                         * Creates a new ClientAck instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClientAck instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IClientAck): com.alibaba.otter.canal.protocol.ClientAck;

                        /**
                         * Encodes the specified ClientAck message. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientAck.verify|verify} messages.
                         * @param message ClientAck message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IClientAck, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClientAck message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientAck.verify|verify} messages.
                         * @param message ClientAck message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IClientAck, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClientAck message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClientAck
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.ClientAck;

                        /**
                         * Decodes a ClientAck message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClientAck
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.ClientAck;

                        /**
                         * Verifies a ClientAck message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClientAck message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClientAck
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.ClientAck;

                        /**
                         * Creates a plain object from a ClientAck message. Also converts values to other types if specified.
                         * @param message ClientAck
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.ClientAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClientAck to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClientAck
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Sub. */
                    interface ISub {

                        /** Sub destination */
                        destination?: (string|null);

                        /** Sub clientId */
                        clientId?: (string|null);

                        /** Sub filter */
                        filter?: (string|null);
                    }

                    /** Represents a Sub. */
                    class Sub implements ISub {

                        /**
                         * Constructs a new Sub.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.ISub);

                        /** Sub destination. */
                        public destination: string;

                        /** Sub clientId. */
                        public clientId: string;

                        /** Sub filter. */
                        public filter: string;

                        /**
                         * Creates a new Sub instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Sub instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.ISub): com.alibaba.otter.canal.protocol.Sub;

                        /**
                         * Encodes the specified Sub message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Sub.verify|verify} messages.
                         * @param message Sub message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.ISub, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Sub message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Sub.verify|verify} messages.
                         * @param message Sub message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.ISub, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Sub message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Sub
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Sub;

                        /**
                         * Decodes a Sub message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Sub
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Sub;

                        /**
                         * Verifies a Sub message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Sub message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Sub
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Sub;

                        /**
                         * Creates a plain object from a Sub message. Also converts values to other types if specified.
                         * @param message Sub
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Sub, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Sub to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Sub
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Unsub. */
                    interface IUnsub {

                        /** Unsub destination */
                        destination?: (string|null);

                        /** Unsub clientId */
                        clientId?: (string|null);

                        /** Unsub filter */
                        filter?: (string|null);
                    }

                    /** Represents an Unsub. */
                    class Unsub implements IUnsub {

                        /**
                         * Constructs a new Unsub.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IUnsub);

                        /** Unsub destination. */
                        public destination: string;

                        /** Unsub clientId. */
                        public clientId: string;

                        /** Unsub filter. */
                        public filter: string;

                        /**
                         * Creates a new Unsub instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Unsub instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IUnsub): com.alibaba.otter.canal.protocol.Unsub;

                        /**
                         * Encodes the specified Unsub message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Unsub.verify|verify} messages.
                         * @param message Unsub message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IUnsub, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Unsub message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Unsub.verify|verify} messages.
                         * @param message Unsub message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IUnsub, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Unsub message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Unsub
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Unsub;

                        /**
                         * Decodes an Unsub message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Unsub
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Unsub;

                        /**
                         * Verifies an Unsub message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Unsub message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Unsub
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Unsub;

                        /**
                         * Creates a plain object from an Unsub message. Also converts values to other types if specified.
                         * @param message Unsub
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Unsub, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Unsub to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Unsub
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Get. */
                    interface IGet {

                        /** Get destination */
                        destination?: (string|null);

                        /** Get clientId */
                        clientId?: (string|null);

                        /** Get fetchSize */
                        fetchSize?: (number|null);

                        /** Get timeout */
                        timeout?: (number|Long|null);

                        /** Get unit */
                        unit?: (number|null);

                        /** Get autoAck */
                        autoAck?: (boolean|null);
                    }

                    /** Represents a Get. */
                    class Get implements IGet {

                        /**
                         * Constructs a new Get.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IGet);

                        /** Get destination. */
                        public destination: string;

                        /** Get clientId. */
                        public clientId: string;

                        /** Get fetchSize. */
                        public fetchSize: number;

                        /** Get timeout. */
                        public timeout?: (number|Long|null);

                        /** Get unit. */
                        public unit?: (number|null);

                        /** Get autoAck. */
                        public autoAck?: (boolean|null);

                        /** Get timeoutPresent. */
                        public timeoutPresent?: "timeout";

                        /** Get unitPresent. */
                        public unitPresent?: "unit";

                        /** Get autoAckPresent. */
                        public autoAckPresent?: "autoAck";

                        /**
                         * Creates a new Get instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Get instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IGet): com.alibaba.otter.canal.protocol.Get;

                        /**
                         * Encodes the specified Get message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Get.verify|verify} messages.
                         * @param message Get message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IGet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Get message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Get.verify|verify} messages.
                         * @param message Get message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IGet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Get message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Get
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Get;

                        /**
                         * Decodes a Get message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Get
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Get;

                        /**
                         * Verifies a Get message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Get message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Get
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Get;

                        /**
                         * Creates a plain object from a Get message. Also converts values to other types if specified.
                         * @param message Get
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Get, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Get to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Get
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Messages. */
                    interface IMessages {

                        /** Messages batchId */
                        batchId?: (number|Long|null);

                        /** Messages messages */
                        messages?: (Uint8Array[]|null);
                    }

                    /** Represents a Messages. */
                    class Messages implements IMessages {

                        /**
                         * Constructs a new Messages.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IMessages);

                        /** Messages batchId. */
                        public batchId: (number|Long);

                        /** Messages messages. */
                        public messages: Uint8Array[];

                        /**
                         * Creates a new Messages instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Messages instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IMessages): com.alibaba.otter.canal.protocol.Messages;

                        /**
                         * Encodes the specified Messages message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Messages.verify|verify} messages.
                         * @param message Messages message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IMessages, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Messages message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Messages.verify|verify} messages.
                         * @param message Messages message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IMessages, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Messages message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Messages
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Messages;

                        /**
                         * Decodes a Messages message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Messages
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Messages;

                        /**
                         * Verifies a Messages message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Messages message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Messages
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Messages;

                        /**
                         * Creates a plain object from a Messages message. Also converts values to other types if specified.
                         * @param message Messages
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Messages, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Messages to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Messages
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Dump. */
                    interface IDump {

                        /** Dump journal */
                        journal?: (string|null);

                        /** Dump position */
                        position?: (number|Long|null);

                        /** Dump timestamp */
                        timestamp?: (number|Long|null);
                    }

                    /** Represents a Dump. */
                    class Dump implements IDump {

                        /**
                         * Constructs a new Dump.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IDump);

                        /** Dump journal. */
                        public journal: string;

                        /** Dump position. */
                        public position: (number|Long);

                        /** Dump timestamp. */
                        public timestamp?: (number|Long|null);

                        /** Dump timestampPresent. */
                        public timestampPresent?: "timestamp";

                        /**
                         * Creates a new Dump instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Dump instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IDump): com.alibaba.otter.canal.protocol.Dump;

                        /**
                         * Encodes the specified Dump message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Dump.verify|verify} messages.
                         * @param message Dump message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IDump, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Dump message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Dump.verify|verify} messages.
                         * @param message Dump message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IDump, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Dump message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Dump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Dump;

                        /**
                         * Decodes a Dump message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Dump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Dump;

                        /**
                         * Verifies a Dump message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Dump message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Dump
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Dump;

                        /**
                         * Creates a plain object from a Dump message. Also converts values to other types if specified.
                         * @param message Dump
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Dump, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Dump to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Dump
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ClientRollback. */
                    interface IClientRollback {

                        /** ClientRollback destination */
                        destination?: (string|null);

                        /** ClientRollback clientId */
                        clientId?: (string|null);

                        /** ClientRollback batchId */
                        batchId?: (number|Long|null);
                    }

                    /** Represents a ClientRollback. */
                    class ClientRollback implements IClientRollback {

                        /**
                         * Constructs a new ClientRollback.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IClientRollback);

                        /** ClientRollback destination. */
                        public destination: string;

                        /** ClientRollback clientId. */
                        public clientId: string;

                        /** ClientRollback batchId. */
                        public batchId: (number|Long);

                        /**
                         * Creates a new ClientRollback instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClientRollback instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IClientRollback): com.alibaba.otter.canal.protocol.ClientRollback;

                        /**
                         * Encodes the specified ClientRollback message. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientRollback.verify|verify} messages.
                         * @param message ClientRollback message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IClientRollback, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClientRollback message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientRollback.verify|verify} messages.
                         * @param message ClientRollback message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IClientRollback, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClientRollback message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClientRollback
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.ClientRollback;

                        /**
                         * Decodes a ClientRollback message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClientRollback
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.ClientRollback;

                        /**
                         * Verifies a ClientRollback message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClientRollback message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClientRollback
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.ClientRollback;

                        /**
                         * Creates a plain object from a ClientRollback message. Also converts values to other types if specified.
                         * @param message ClientRollback
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.ClientRollback, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClientRollback to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClientRollback
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Entry. */
                    interface IEntry {

                        /** 协议头部信息* */
                        header?: (com.alibaba.otter.canal.protocol.IHeader|null);

                        /** Entry entryType */
                        entryType?: (com.alibaba.otter.canal.protocol.EntryType|null);

                        /** 传输的二进制数组* */
                        storeValue?: (Uint8Array|null);
                    }

                    /**
                     * message model
                     * 如果要在Enum中新增类型，确保以前的类型的下标值不变.
                     */
                    class Entry implements IEntry {

                        /**
                         * Constructs a new Entry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IEntry);

                        /** 协议头部信息* */
                        public header?: (com.alibaba.otter.canal.protocol.IHeader|null);

                        /** Entry entryType. */
                        public entryType?: (com.alibaba.otter.canal.protocol.EntryType|null);

                        /** 传输的二进制数组* */
                        public storeValue: Uint8Array;

                        /** 打散后的事件类型** / [default = ROWDATA] */
                        public entryTypePresent?: "entryType";

                        /**
                         * Creates a new Entry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Entry instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IEntry): com.alibaba.otter.canal.protocol.Entry;

                        /**
                         * Encodes the specified Entry message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Entry.verify|verify} messages.
                         * @param message Entry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Entry message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Entry.verify|verify} messages.
                         * @param message Entry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Entry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Entry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Entry;

                        /**
                         * Decodes an Entry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Entry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Entry;

                        /**
                         * Verifies an Entry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Entry
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Entry;

                        /**
                         * Creates a plain object from an Entry message. Also converts values to other types if specified.
                         * @param message Entry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Entry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Entry
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Header. */
                    interface IHeader {

                        /** Header version */
                        version?: (number|null);

                        /** binlog/redolog 文件名* */
                        logfileName?: (string|null);

                        /** binlog/redolog 文件的偏移位置* */
                        logfileOffset?: (number|Long|null);

                        /** 服务端serverId* */
                        serverId?: (number|Long|null);

                        /** 变更数据的编码 * */
                        serverenCode?: (string|null);

                        /** 变更数据的执行时间 * */
                        executeTime?: (number|Long|null);

                        /** Header sourceType */
                        sourceType?: (com.alibaba.otter.canal.protocol.Type|null);

                        /** 变更数据的schemaname* */
                        schemaName?: (string|null);

                        /** 变更数据的tablename* */
                        tableName?: (string|null);

                        /** 每个event的长度* */
                        eventLength?: (number|Long|null);

                        /** Header eventType */
                        eventType?: (com.alibaba.otter.canal.protocol.EventType|null);

                        /** 预留扩展* */
                        props?: (com.alibaba.otter.canal.protocol.IPair[]|null);

                        /** 当前事务的gitd* */
                        gtid?: (string|null);
                    }

                    /** message Header* */
                    class Header implements IHeader {

                        /**
                         * Constructs a new Header.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IHeader);

                        /** Header version. */
                        public version?: (number|null);

                        /** binlog/redolog 文件名* */
                        public logfileName: string;

                        /** binlog/redolog 文件的偏移位置* */
                        public logfileOffset: (number|Long);

                        /** 服务端serverId* */
                        public serverId: (number|Long);

                        /** 变更数据的编码 * */
                        public serverenCode: string;

                        /** 变更数据的执行时间 * */
                        public executeTime: (number|Long);

                        /** Header sourceType. */
                        public sourceType?: (com.alibaba.otter.canal.protocol.Type|null);

                        /** 变更数据的schemaname* */
                        public schemaName: string;

                        /** 变更数据的tablename* */
                        public tableName: string;

                        /** 每个event的长度* */
                        public eventLength: (number|Long);

                        /** Header eventType. */
                        public eventType?: (com.alibaba.otter.canal.protocol.EventType|null);

                        /** 预留扩展* */
                        public props: com.alibaba.otter.canal.protocol.IPair[];

                        /** 当前事务的gitd* */
                        public gtid: string;

                        /** 协议的版本号* */
                        public versionPresent?: "version";

                        /** 变更数据的来源* */
                        public sourceTypePresent?: "sourceType";

                        /** 数据变更类型* */
                        public eventTypePresent?: "eventType";

                        /**
                         * Creates a new Header instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Header instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IHeader): com.alibaba.otter.canal.protocol.Header;

                        /**
                         * Encodes the specified Header message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Header message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Header message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Header;

                        /**
                         * Decodes a Header message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Header;

                        /**
                         * Verifies a Header message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Header message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Header
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Header;

                        /**
                         * Creates a plain object from a Header message. Also converts values to other types if specified.
                         * @param message Header
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Header to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Header
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Column. */
                    interface IColumn {

                        /** 字段下标* */
                        index?: (number|null);

                        /** 字段java中类型* */
                        sqlType?: (number|null);

                        /** 字段名称(忽略大小写)，在mysql中是没有的* */
                        name?: (string|null);

                        /** 是否是主键* */
                        isKey?: (boolean|null);

                        /** 如果EventType=UPDATE,用于标识这个字段值是否有修改* */
                        updated?: (boolean|null);

                        /** Column isNull */
                        isNull?: (boolean|null);

                        /** 预留扩展* */
                        props?: (com.alibaba.otter.canal.protocol.IPair[]|null);

                        /** 字段值,timestamp,Datetime是一个时间格式的文本 * */
                        value?: (string|null);

                        /** 对应数据对象原始长度 * */
                        length?: (number|null);

                        /** 字段mysql类型* */
                        mysqlType?: (string|null);
                    }

                    /** 每个字段的数据结构* */
                    class Column implements IColumn {

                        /**
                         * Constructs a new Column.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IColumn);

                        /** 字段下标* */
                        public index: number;

                        /** 字段java中类型* */
                        public sqlType: number;

                        /** 字段名称(忽略大小写)，在mysql中是没有的* */
                        public name: string;

                        /** 是否是主键* */
                        public isKey: boolean;

                        /** 如果EventType=UPDATE,用于标识这个字段值是否有修改* */
                        public updated: boolean;

                        /** Column isNull. */
                        public isNull?: (boolean|null);

                        /** 预留扩展* */
                        public props: com.alibaba.otter.canal.protocol.IPair[];

                        /** 字段值,timestamp,Datetime是一个时间格式的文本 * */
                        public value: string;

                        /** 对应数据对象原始长度 * */
                        public length: number;

                        /** 字段mysql类型* */
                        public mysqlType: string;

                        /** 标识是否为空  * */
                        public isNullPresent?: "isNull";

                        /**
                         * Creates a new Column instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Column instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IColumn): com.alibaba.otter.canal.protocol.Column;

                        /**
                         * Encodes the specified Column message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Column.verify|verify} messages.
                         * @param message Column message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Column message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Column.verify|verify} messages.
                         * @param message Column message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Column message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Column;

                        /**
                         * Decodes a Column message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Column;

                        /**
                         * Verifies a Column message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Column message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Column
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Column;

                        /**
                         * Creates a plain object from a Column message. Also converts values to other types if specified.
                         * @param message Column
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Column, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Column to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Column
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RowData. */
                    interface IRowData {

                        /** 字段信息，增量数据(修改前,删除前) * */
                        beforeColumns?: (com.alibaba.otter.canal.protocol.IColumn[]|null);

                        /** 字段信息，增量数据(修改后,新增后)  * */
                        afterColumns?: (com.alibaba.otter.canal.protocol.IColumn[]|null);

                        /** 预留扩展* */
                        props?: (com.alibaba.otter.canal.protocol.IPair[]|null);
                    }

                    /** Represents a RowData. */
                    class RowData implements IRowData {

                        /**
                         * Constructs a new RowData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IRowData);

                        /** 字段信息，增量数据(修改前,删除前) * */
                        public beforeColumns: com.alibaba.otter.canal.protocol.IColumn[];

                        /** 字段信息，增量数据(修改后,新增后)  * */
                        public afterColumns: com.alibaba.otter.canal.protocol.IColumn[];

                        /** 预留扩展* */
                        public props: com.alibaba.otter.canal.protocol.IPair[];

                        /**
                         * Creates a new RowData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RowData instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IRowData): com.alibaba.otter.canal.protocol.RowData;

                        /**
                         * Encodes the specified RowData message. Does not implicitly {@link com.alibaba.otter.canal.protocol.RowData.verify|verify} messages.
                         * @param message RowData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IRowData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RowData message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.RowData.verify|verify} messages.
                         * @param message RowData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IRowData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RowData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RowData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.RowData;

                        /**
                         * Decodes a RowData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RowData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.RowData;

                        /**
                         * Verifies a RowData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RowData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RowData
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.RowData;

                        /**
                         * Creates a plain object from a RowData message. Also converts values to other types if specified.
                         * @param message RowData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.RowData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RowData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RowData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RowChange. */
                    interface IRowChange {

                        /** tableId,由数据库产生* */
                        tableId?: (number|Long|null);

                        /** RowChange eventType */
                        eventType?: (com.alibaba.otter.canal.protocol.EventType|null);

                        /** RowChange isDdl */
                        isDdl?: (boolean|null);

                        /** ddl/query的sql语句  * */
                        sql?: (string|null);

                        /** 一次数据库变更可能存在多行  * */
                        rowDatas?: (com.alibaba.otter.canal.protocol.IRowData[]|null);

                        /** 预留扩展* */
                        props?: (com.alibaba.otter.canal.protocol.IPair[]|null);

                        /** ddl/query的schemaName，会存在跨库ddl，需要保留执行ddl的当前schemaName  * */
                        ddlSchemaName?: (string|null);
                    }

                    /** message row 每行变更数据的数据结构* */
                    class RowChange implements IRowChange {

                        /**
                         * Constructs a new RowChange.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IRowChange);

                        /** tableId,由数据库产生* */
                        public tableId: (number|Long);

                        /** RowChange eventType. */
                        public eventType?: (com.alibaba.otter.canal.protocol.EventType|null);

                        /** RowChange isDdl. */
                        public isDdl?: (boolean|null);

                        /** ddl/query的sql语句  * */
                        public sql: string;

                        /** 一次数据库变更可能存在多行  * */
                        public rowDatas: com.alibaba.otter.canal.protocol.IRowData[];

                        /** 预留扩展* */
                        public props: com.alibaba.otter.canal.protocol.IPair[];

                        /** ddl/query的schemaName，会存在跨库ddl，需要保留执行ddl的当前schemaName  * */
                        public ddlSchemaName: string;

                        /** 数据变更类型* */
                        public eventTypePresent?: "eventType";

                        /** 标识是否是ddl语句  * */
                        public isDdlPresent?: "isDdl";

                        /**
                         * Creates a new RowChange instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RowChange instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IRowChange): com.alibaba.otter.canal.protocol.RowChange;

                        /**
                         * Encodes the specified RowChange message. Does not implicitly {@link com.alibaba.otter.canal.protocol.RowChange.verify|verify} messages.
                         * @param message RowChange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IRowChange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RowChange message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.RowChange.verify|verify} messages.
                         * @param message RowChange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IRowChange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RowChange message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RowChange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.RowChange;

                        /**
                         * Decodes a RowChange message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RowChange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.RowChange;

                        /**
                         * Verifies a RowChange message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RowChange message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RowChange
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.RowChange;

                        /**
                         * Creates a plain object from a RowChange message. Also converts values to other types if specified.
                         * @param message RowChange
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.RowChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RowChange to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RowChange
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TransactionBegin. */
                    interface ITransactionBegin {

                        /** 已废弃，请使用header里的executeTime* */
                        executeTime?: (number|Long|null);

                        /** 已废弃，Begin里不提供事务id* */
                        transactionId?: (string|null);

                        /** 预留扩展* */
                        props?: (com.alibaba.otter.canal.protocol.IPair[]|null);

                        /** 执行的thread Id* */
                        threadId?: (number|Long|null);
                    }

                    /** 开始事务的一些信息* */
                    class TransactionBegin implements ITransactionBegin {

                        /**
                         * Constructs a new TransactionBegin.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.ITransactionBegin);

                        /** 已废弃，请使用header里的executeTime* */
                        public executeTime: (number|Long);

                        /** 已废弃，Begin里不提供事务id* */
                        public transactionId: string;

                        /** 预留扩展* */
                        public props: com.alibaba.otter.canal.protocol.IPair[];

                        /** 执行的thread Id* */
                        public threadId: (number|Long);

                        /**
                         * Creates a new TransactionBegin instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TransactionBegin instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.ITransactionBegin): com.alibaba.otter.canal.protocol.TransactionBegin;

                        /**
                         * Encodes the specified TransactionBegin message. Does not implicitly {@link com.alibaba.otter.canal.protocol.TransactionBegin.verify|verify} messages.
                         * @param message TransactionBegin message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.ITransactionBegin, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TransactionBegin message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.TransactionBegin.verify|verify} messages.
                         * @param message TransactionBegin message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.ITransactionBegin, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TransactionBegin message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TransactionBegin
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.TransactionBegin;

                        /**
                         * Decodes a TransactionBegin message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TransactionBegin
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.TransactionBegin;

                        /**
                         * Verifies a TransactionBegin message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TransactionBegin message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TransactionBegin
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.TransactionBegin;

                        /**
                         * Creates a plain object from a TransactionBegin message. Also converts values to other types if specified.
                         * @param message TransactionBegin
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.TransactionBegin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TransactionBegin to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TransactionBegin
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TransactionEnd. */
                    interface ITransactionEnd {

                        /** 已废弃，请使用header里的executeTime* */
                        executeTime?: (number|Long|null);

                        /** 事务号* */
                        transactionId?: (string|null);

                        /** 预留扩展* */
                        props?: (com.alibaba.otter.canal.protocol.IPair[]|null);
                    }

                    /** 结束事务的一些信息* */
                    class TransactionEnd implements ITransactionEnd {

                        /**
                         * Constructs a new TransactionEnd.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.ITransactionEnd);

                        /** 已废弃，请使用header里的executeTime* */
                        public executeTime: (number|Long);

                        /** 事务号* */
                        public transactionId: string;

                        /** 预留扩展* */
                        public props: com.alibaba.otter.canal.protocol.IPair[];

                        /**
                         * Creates a new TransactionEnd instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TransactionEnd instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.ITransactionEnd): com.alibaba.otter.canal.protocol.TransactionEnd;

                        /**
                         * Encodes the specified TransactionEnd message. Does not implicitly {@link com.alibaba.otter.canal.protocol.TransactionEnd.verify|verify} messages.
                         * @param message TransactionEnd message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.ITransactionEnd, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TransactionEnd message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.TransactionEnd.verify|verify} messages.
                         * @param message TransactionEnd message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.ITransactionEnd, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TransactionEnd message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TransactionEnd
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.TransactionEnd;

                        /**
                         * Decodes a TransactionEnd message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TransactionEnd
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.TransactionEnd;

                        /**
                         * Verifies a TransactionEnd message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TransactionEnd message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TransactionEnd
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.TransactionEnd;

                        /**
                         * Creates a plain object from a TransactionEnd message. Also converts values to other types if specified.
                         * @param message TransactionEnd
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.TransactionEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TransactionEnd to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TransactionEnd
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Pair. */
                    interface IPair {

                        /** Pair key */
                        key?: (string|null);

                        /** Pair value */
                        value?: (string|null);
                    }

                    /** 预留扩展* */
                    class Pair implements IPair {

                        /**
                         * Constructs a new Pair.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.alibaba.otter.canal.protocol.IPair);

                        /** Pair key. */
                        public key: string;

                        /** Pair value. */
                        public value: string;

                        /**
                         * Creates a new Pair instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Pair instance
                         */
                        public static create(properties?: com.alibaba.otter.canal.protocol.IPair): com.alibaba.otter.canal.protocol.Pair;

                        /**
                         * Encodes the specified Pair message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Pair.verify|verify} messages.
                         * @param message Pair message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.alibaba.otter.canal.protocol.IPair, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Pair message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Pair.verify|verify} messages.
                         * @param message Pair message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.alibaba.otter.canal.protocol.IPair, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Pair message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Pair
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.alibaba.otter.canal.protocol.Pair;

                        /**
                         * Decodes a Pair message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Pair
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.alibaba.otter.canal.protocol.Pair;

                        /**
                         * Verifies a Pair message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Pair
                         */
                        public static fromObject(object: { [k: string]: any }): com.alibaba.otter.canal.protocol.Pair;

                        /**
                         * Creates a plain object from a Pair message. Also converts values to other types if specified.
                         * @param message Pair
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.alibaba.otter.canal.protocol.Pair, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Pair to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Pair
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** 打散后的事件类型，主要用于标识事务的开始，变更数据，结束* */
                    enum EntryType {
                        ENTRYTYPECOMPATIBLEPROTO2 = 0,
                        TRANSACTIONBEGIN = 1,
                        ROWDATA = 2,
                        TRANSACTIONEND = 3,
                        HEARTBEAT = 4,
                        GTIDLOG = 5
                    }

                    /** 事件类型 * */
                    enum EventType {
                        EVENTTYPECOMPATIBLEPROTO2 = 0,
                        INSERT = 1,
                        UPDATE = 2,
                        DELETE = 3,
                        CREATE = 4,
                        ALTER = 5,
                        ERASE = 6,
                        QUERY = 7,
                        TRUNCATE = 8,
                        RENAME = 9,
                        CINDEX = 10,
                        DINDEX = 11,
                        GTID = 12,
                        XACOMMIT = 13,
                        XAROLLBACK = 14,
                        MHEARTBEAT = 15
                    }

                    /** 数据库类型* */
                    enum Type {
                        TYPECOMPATIBLEPROTO2 = 0,
                        ORACLE = 1,
                        MYSQL = 2,
                        PGSQL = 3
                    }
                }
            }
        }
    }
}
