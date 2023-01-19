/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.alibaba = (function() {

        /**
         * Namespace alibaba.
         * @memberof com
         * @namespace
         */
        var alibaba = {};

        alibaba.otter = (function() {

            /**
             * Namespace otter.
             * @memberof com.alibaba
             * @namespace
             */
            var otter = {};

            otter.canal = (function() {

                /**
                 * Namespace canal.
                 * @memberof com.alibaba.otter
                 * @namespace
                 */
                var canal = {};

                canal.protocol = (function() {

                    /**
                     * Namespace protocol.
                     * @memberof com.alibaba.otter.canal
                     * @namespace
                     */
                    var protocol = {};

                    /**
                     * Compression enum.
                     * @name com.alibaba.otter.canal.protocol.Compression
                     * @enum {number}
                     * @property {number} COMPRESSIONCOMPATIBLEPROTO2=0 COMPRESSIONCOMPATIBLEPROTO2 value
                     * @property {number} NONE=1 NONE value
                     * @property {number} ZLIB=2 ZLIB value
                     * @property {number} GZIP=3 GZIP value
                     * @property {number} LZF=4 LZF value
                     */
                    protocol.Compression = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "COMPRESSIONCOMPATIBLEPROTO2"] = 0;
                        values[valuesById[1] = "NONE"] = 1;
                        values[valuesById[2] = "ZLIB"] = 2;
                        values[valuesById[3] = "GZIP"] = 3;
                        values[valuesById[4] = "LZF"] = 4;
                        return values;
                    })();

                    /**
                     * PacketType enum.
                     * @name com.alibaba.otter.canal.protocol.PacketType
                     * @enum {number}
                     * @property {number} PACKAGETYPECOMPATIBLEPROTO2=0 PACKAGETYPECOMPATIBLEPROTO2 value
                     * @property {number} HANDSHAKE=1 HANDSHAKE value
                     * @property {number} CLIENTAUTHENTICATION=2 CLIENTAUTHENTICATION value
                     * @property {number} ACK=3 ACK value
                     * @property {number} SUBSCRIPTION=4 SUBSCRIPTION value
                     * @property {number} UNSUBSCRIPTION=5 UNSUBSCRIPTION value
                     * @property {number} GET=6 GET value
                     * @property {number} MESSAGES=7 MESSAGES value
                     * @property {number} CLIENTACK=8 CLIENTACK value
                     * @property {number} SHUTDOWN=9 SHUTDOWN value
                     * @property {number} DUMP=10 DUMP value
                     * @property {number} HEARTBEAT=11 HEARTBEAT value
                     * @property {number} CLIENTROLLBACK=12 CLIENTROLLBACK value
                     */
                    protocol.PacketType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "PACKAGETYPECOMPATIBLEPROTO2"] = 0;
                        values[valuesById[1] = "HANDSHAKE"] = 1;
                        values[valuesById[2] = "CLIENTAUTHENTICATION"] = 2;
                        values[valuesById[3] = "ACK"] = 3;
                        values[valuesById[4] = "SUBSCRIPTION"] = 4;
                        values[valuesById[5] = "UNSUBSCRIPTION"] = 5;
                        values[valuesById[6] = "GET"] = 6;
                        values[valuesById[7] = "MESSAGES"] = 7;
                        values[valuesById[8] = "CLIENTACK"] = 8;
                        values[valuesById[9] = "SHUTDOWN"] = 9;
                        values[valuesById[10] = "DUMP"] = 10;
                        values[valuesById[11] = "HEARTBEAT"] = 11;
                        values[valuesById[12] = "CLIENTROLLBACK"] = 12;
                        return values;
                    })();

                    protocol.Packet = (function() {

                        /**
                         * Properties of a Packet.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IPacket
                         * @property {number|null} [magicNumber] Packet magicNumber
                         * @property {number|null} [version] Packet version
                         * @property {com.alibaba.otter.canal.protocol.PacketType|null} [type] Packet type
                         * @property {com.alibaba.otter.canal.protocol.Compression|null} [compression] Packet compression
                         * @property {Uint8Array|null} [body] Packet body
                         */

                        /**
                         * Constructs a new Packet.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a Packet.
                         * @implements IPacket
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IPacket=} [properties] Properties to set
                         */
                        function Packet(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Packet magicNumber.
                         * @member {number|null|undefined} magicNumber
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @instance
                         */
                        Packet.prototype.magicNumber = null;

                        /**
                         * Packet version.
                         * @member {number|null|undefined} version
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @instance
                         */
                        Packet.prototype.version = null;

                        /**
                         * Packet type.
                         * @member {com.alibaba.otter.canal.protocol.PacketType} type
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @instance
                         */
                        Packet.prototype.type = 0;

                        /**
                         * Packet compression.
                         * @member {com.alibaba.otter.canal.protocol.Compression|null|undefined} compression
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @instance
                         */
                        Packet.prototype.compression = null;

                        /**
                         * Packet body.
                         * @member {Uint8Array} body
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @instance
                         */
                        Packet.prototype.body = $util.newBuffer([]);

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * Packet magicNumberPresent.
                         * @member {"magicNumber"|undefined} magicNumberPresent
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @instance
                         */
                        Object.defineProperty(Packet.prototype, "magicNumberPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["magicNumber"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Packet versionPresent.
                         * @member {"version"|undefined} versionPresent
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @instance
                         */
                        Object.defineProperty(Packet.prototype, "versionPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["version"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Packet compressionPresent.
                         * @member {"compression"|undefined} compressionPresent
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @instance
                         */
                        Object.defineProperty(Packet.prototype, "compressionPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["compression"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Packet instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IPacket=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Packet} Packet instance
                         */
                        Packet.create = function create(properties) {
                            return new Packet(properties);
                        };

                        /**
                         * Encodes the specified Packet message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Packet.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IPacket} message Packet message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Packet.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.magicNumber != null && Object.hasOwnProperty.call(message, "magicNumber"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.magicNumber);
                            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.version);
                            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                            if (message.compression != null && Object.hasOwnProperty.call(message, "compression"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.compression);
                            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.body);
                            return writer;
                        };

                        /**
                         * Encodes the specified Packet message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Packet.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IPacket} message Packet message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Packet.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Packet message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Packet} Packet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Packet.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Packet();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.magicNumber = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.version = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.type = reader.int32();
                                        break;
                                    }
                                case 4: {
                                        message.compression = reader.int32();
                                        break;
                                    }
                                case 5: {
                                        message.body = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Packet message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Packet} Packet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Packet.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Packet message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Packet.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.magicNumber != null && message.hasOwnProperty("magicNumber")) {
                                properties.magicNumberPresent = 1;
                                if (!$util.isInteger(message.magicNumber))
                                    return "magicNumber: integer expected";
                            }
                            if (message.version != null && message.hasOwnProperty("version")) {
                                properties.versionPresent = 1;
                                if (!$util.isInteger(message.version))
                                    return "version: integer expected";
                            }
                            if (message.type != null && message.hasOwnProperty("type"))
                                switch (message.type) {
                                default:
                                    return "type: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                    break;
                                }
                            if (message.compression != null && message.hasOwnProperty("compression")) {
                                properties.compressionPresent = 1;
                                switch (message.compression) {
                                default:
                                    return "compression: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    break;
                                }
                            }
                            if (message.body != null && message.hasOwnProperty("body"))
                                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                                    return "body: buffer expected";
                            return null;
                        };

                        /**
                         * Creates a Packet message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Packet} Packet
                         */
                        Packet.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Packet)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Packet();
                            if (object.magicNumber != null)
                                message.magicNumber = object.magicNumber | 0;
                            if (object.version != null)
                                message.version = object.version | 0;
                            switch (object.type) {
                            default:
                                if (typeof object.type === "number") {
                                    message.type = object.type;
                                    break;
                                }
                                break;
                            case "PACKAGETYPECOMPATIBLEPROTO2":
                            case 0:
                                message.type = 0;
                                break;
                            case "HANDSHAKE":
                            case 1:
                                message.type = 1;
                                break;
                            case "CLIENTAUTHENTICATION":
                            case 2:
                                message.type = 2;
                                break;
                            case "ACK":
                            case 3:
                                message.type = 3;
                                break;
                            case "SUBSCRIPTION":
                            case 4:
                                message.type = 4;
                                break;
                            case "UNSUBSCRIPTION":
                            case 5:
                                message.type = 5;
                                break;
                            case "GET":
                            case 6:
                                message.type = 6;
                                break;
                            case "MESSAGES":
                            case 7:
                                message.type = 7;
                                break;
                            case "CLIENTACK":
                            case 8:
                                message.type = 8;
                                break;
                            case "SHUTDOWN":
                            case 9:
                                message.type = 9;
                                break;
                            case "DUMP":
                            case 10:
                                message.type = 10;
                                break;
                            case "HEARTBEAT":
                            case 11:
                                message.type = 11;
                                break;
                            case "CLIENTROLLBACK":
                            case 12:
                                message.type = 12;
                                break;
                            }
                            switch (object.compression) {
                            default:
                                if (typeof object.compression === "number") {
                                    message.compression = object.compression;
                                    break;
                                }
                                break;
                            case "COMPRESSIONCOMPATIBLEPROTO2":
                            case 0:
                                message.compression = 0;
                                break;
                            case "NONE":
                            case 1:
                                message.compression = 1;
                                break;
                            case "ZLIB":
                            case 2:
                                message.compression = 2;
                                break;
                            case "GZIP":
                            case 3:
                                message.compression = 3;
                                break;
                            case "LZF":
                            case 4:
                                message.compression = 4;
                                break;
                            }
                            if (object.body != null)
                                if (typeof object.body === "string")
                                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                                else if (object.body.length >= 0)
                                    message.body = object.body;
                            return message;
                        };

                        /**
                         * Creates a plain object from a Packet message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Packet} message Packet
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Packet.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.type = options.enums === String ? "PACKAGETYPECOMPATIBLEPROTO2" : 0;
                                if (options.bytes === String)
                                    object.body = "";
                                else {
                                    object.body = [];
                                    if (options.bytes !== Array)
                                        object.body = $util.newBuffer(object.body);
                                }
                            }
                            if (message.magicNumber != null && message.hasOwnProperty("magicNumber")) {
                                object.magicNumber = message.magicNumber;
                                if (options.oneofs)
                                    object.magicNumberPresent = "magicNumber";
                            }
                            if (message.version != null && message.hasOwnProperty("version")) {
                                object.version = message.version;
                                if (options.oneofs)
                                    object.versionPresent = "version";
                            }
                            if (message.type != null && message.hasOwnProperty("type"))
                                object.type = options.enums === String ? $root.com.alibaba.otter.canal.protocol.PacketType[message.type] === undefined ? message.type : $root.com.alibaba.otter.canal.protocol.PacketType[message.type] : message.type;
                            if (message.compression != null && message.hasOwnProperty("compression")) {
                                object.compression = options.enums === String ? $root.com.alibaba.otter.canal.protocol.Compression[message.compression] === undefined ? message.compression : $root.com.alibaba.otter.canal.protocol.Compression[message.compression] : message.compression;
                                if (options.oneofs)
                                    object.compressionPresent = "compression";
                            }
                            if (message.body != null && message.hasOwnProperty("body"))
                                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
                            return object;
                        };

                        /**
                         * Converts this Packet to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Packet.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Packet
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Packet
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Packet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Packet";
                        };

                        return Packet;
                    })();

                    protocol.HeartBeat = (function() {

                        /**
                         * Properties of a HeartBeat.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IHeartBeat
                         * @property {number|Long|null} [sendTimestamp] HeartBeat sendTimestamp
                         * @property {number|Long|null} [startTimestamp] HeartBeat startTimestamp
                         */

                        /**
                         * Constructs a new HeartBeat.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a HeartBeat.
                         * @implements IHeartBeat
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IHeartBeat=} [properties] Properties to set
                         */
                        function HeartBeat(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * HeartBeat sendTimestamp.
                         * @member {number|Long} sendTimestamp
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @instance
                         */
                        HeartBeat.prototype.sendTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * HeartBeat startTimestamp.
                         * @member {number|Long} startTimestamp
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @instance
                         */
                        HeartBeat.prototype.startTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new HeartBeat instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IHeartBeat=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.HeartBeat} HeartBeat instance
                         */
                        HeartBeat.create = function create(properties) {
                            return new HeartBeat(properties);
                        };

                        /**
                         * Encodes the specified HeartBeat message. Does not implicitly {@link com.alibaba.otter.canal.protocol.HeartBeat.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IHeartBeat} message HeartBeat message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        HeartBeat.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.sendTimestamp != null && Object.hasOwnProperty.call(message, "sendTimestamp"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sendTimestamp);
                            if (message.startTimestamp != null && Object.hasOwnProperty.call(message, "startTimestamp"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.startTimestamp);
                            return writer;
                        };

                        /**
                         * Encodes the specified HeartBeat message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.HeartBeat.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IHeartBeat} message HeartBeat message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        HeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a HeartBeat message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.HeartBeat} HeartBeat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        HeartBeat.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.HeartBeat();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.sendTimestamp = reader.int64();
                                        break;
                                    }
                                case 2: {
                                        message.startTimestamp = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a HeartBeat message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.HeartBeat} HeartBeat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        HeartBeat.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a HeartBeat message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        HeartBeat.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.sendTimestamp != null && message.hasOwnProperty("sendTimestamp"))
                                if (!$util.isInteger(message.sendTimestamp) && !(message.sendTimestamp && $util.isInteger(message.sendTimestamp.low) && $util.isInteger(message.sendTimestamp.high)))
                                    return "sendTimestamp: integer|Long expected";
                            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                                if (!$util.isInteger(message.startTimestamp) && !(message.startTimestamp && $util.isInteger(message.startTimestamp.low) && $util.isInteger(message.startTimestamp.high)))
                                    return "startTimestamp: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a HeartBeat message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.HeartBeat} HeartBeat
                         */
                        HeartBeat.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.HeartBeat)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.HeartBeat();
                            if (object.sendTimestamp != null)
                                if ($util.Long)
                                    (message.sendTimestamp = $util.Long.fromValue(object.sendTimestamp)).unsigned = false;
                                else if (typeof object.sendTimestamp === "string")
                                    message.sendTimestamp = parseInt(object.sendTimestamp, 10);
                                else if (typeof object.sendTimestamp === "number")
                                    message.sendTimestamp = object.sendTimestamp;
                                else if (typeof object.sendTimestamp === "object")
                                    message.sendTimestamp = new $util.LongBits(object.sendTimestamp.low >>> 0, object.sendTimestamp.high >>> 0).toNumber();
                            if (object.startTimestamp != null)
                                if ($util.Long)
                                    (message.startTimestamp = $util.Long.fromValue(object.startTimestamp)).unsigned = false;
                                else if (typeof object.startTimestamp === "string")
                                    message.startTimestamp = parseInt(object.startTimestamp, 10);
                                else if (typeof object.startTimestamp === "number")
                                    message.startTimestamp = object.startTimestamp;
                                else if (typeof object.startTimestamp === "object")
                                    message.startTimestamp = new $util.LongBits(object.startTimestamp.low >>> 0, object.startTimestamp.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a HeartBeat message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.HeartBeat} message HeartBeat
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        HeartBeat.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.sendTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.sendTimestamp = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.startTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.startTimestamp = options.longs === String ? "0" : 0;
                            }
                            if (message.sendTimestamp != null && message.hasOwnProperty("sendTimestamp"))
                                if (typeof message.sendTimestamp === "number")
                                    object.sendTimestamp = options.longs === String ? String(message.sendTimestamp) : message.sendTimestamp;
                                else
                                    object.sendTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.sendTimestamp) : options.longs === Number ? new $util.LongBits(message.sendTimestamp.low >>> 0, message.sendTimestamp.high >>> 0).toNumber() : message.sendTimestamp;
                            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                                if (typeof message.startTimestamp === "number")
                                    object.startTimestamp = options.longs === String ? String(message.startTimestamp) : message.startTimestamp;
                                else
                                    object.startTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.startTimestamp) : options.longs === Number ? new $util.LongBits(message.startTimestamp.low >>> 0, message.startTimestamp.high >>> 0).toNumber() : message.startTimestamp;
                            return object;
                        };

                        /**
                         * Converts this HeartBeat to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        HeartBeat.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for HeartBeat
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.HeartBeat
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        HeartBeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.HeartBeat";
                        };

                        return HeartBeat;
                    })();

                    protocol.Handshake = (function() {

                        /**
                         * Properties of a Handshake.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IHandshake
                         * @property {string|null} [communicationEncoding] Handshake communicationEncoding
                         * @property {Uint8Array|null} [seeds] Handshake seeds
                         * @property {com.alibaba.otter.canal.protocol.Compression|null} [supportedCompressions] Handshake supportedCompressions
                         */

                        /**
                         * Constructs a new Handshake.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a Handshake.
                         * @implements IHandshake
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IHandshake=} [properties] Properties to set
                         */
                        function Handshake(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Handshake communicationEncoding.
                         * @member {string|null|undefined} communicationEncoding
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @instance
                         */
                        Handshake.prototype.communicationEncoding = null;

                        /**
                         * Handshake seeds.
                         * @member {Uint8Array} seeds
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @instance
                         */
                        Handshake.prototype.seeds = $util.newBuffer([]);

                        /**
                         * Handshake supportedCompressions.
                         * @member {com.alibaba.otter.canal.protocol.Compression} supportedCompressions
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @instance
                         */
                        Handshake.prototype.supportedCompressions = 0;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * Handshake communicationEncodingPresent.
                         * @member {"communicationEncoding"|undefined} communicationEncodingPresent
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @instance
                         */
                        Object.defineProperty(Handshake.prototype, "communicationEncodingPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["communicationEncoding"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Handshake instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IHandshake=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Handshake} Handshake instance
                         */
                        Handshake.create = function create(properties) {
                            return new Handshake(properties);
                        };

                        /**
                         * Encodes the specified Handshake message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Handshake.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IHandshake} message Handshake message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Handshake.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.communicationEncoding != null && Object.hasOwnProperty.call(message, "communicationEncoding"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.communicationEncoding);
                            if (message.seeds != null && Object.hasOwnProperty.call(message, "seeds"))
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seeds);
                            if (message.supportedCompressions != null && Object.hasOwnProperty.call(message, "supportedCompressions"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.supportedCompressions);
                            return writer;
                        };

                        /**
                         * Encodes the specified Handshake message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Handshake.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IHandshake} message Handshake message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Handshake.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Handshake message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Handshake} Handshake
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Handshake.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Handshake();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.communicationEncoding = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.seeds = reader.bytes();
                                        break;
                                    }
                                case 3: {
                                        message.supportedCompressions = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Handshake message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Handshake} Handshake
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Handshake.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Handshake message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Handshake.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.communicationEncoding != null && message.hasOwnProperty("communicationEncoding")) {
                                properties.communicationEncodingPresent = 1;
                                if (!$util.isString(message.communicationEncoding))
                                    return "communicationEncoding: string expected";
                            }
                            if (message.seeds != null && message.hasOwnProperty("seeds"))
                                if (!(message.seeds && typeof message.seeds.length === "number" || $util.isString(message.seeds)))
                                    return "seeds: buffer expected";
                            if (message.supportedCompressions != null && message.hasOwnProperty("supportedCompressions"))
                                switch (message.supportedCompressions) {
                                default:
                                    return "supportedCompressions: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                    break;
                                }
                            return null;
                        };

                        /**
                         * Creates a Handshake message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Handshake} Handshake
                         */
                        Handshake.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Handshake)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Handshake();
                            if (object.communicationEncoding != null)
                                message.communicationEncoding = String(object.communicationEncoding);
                            if (object.seeds != null)
                                if (typeof object.seeds === "string")
                                    $util.base64.decode(object.seeds, message.seeds = $util.newBuffer($util.base64.length(object.seeds)), 0);
                                else if (object.seeds.length >= 0)
                                    message.seeds = object.seeds;
                            switch (object.supportedCompressions) {
                            default:
                                if (typeof object.supportedCompressions === "number") {
                                    message.supportedCompressions = object.supportedCompressions;
                                    break;
                                }
                                break;
                            case "COMPRESSIONCOMPATIBLEPROTO2":
                            case 0:
                                message.supportedCompressions = 0;
                                break;
                            case "NONE":
                            case 1:
                                message.supportedCompressions = 1;
                                break;
                            case "ZLIB":
                            case 2:
                                message.supportedCompressions = 2;
                                break;
                            case "GZIP":
                            case 3:
                                message.supportedCompressions = 3;
                                break;
                            case "LZF":
                            case 4:
                                message.supportedCompressions = 4;
                                break;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Handshake message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Handshake} message Handshake
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Handshake.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if (options.bytes === String)
                                    object.seeds = "";
                                else {
                                    object.seeds = [];
                                    if (options.bytes !== Array)
                                        object.seeds = $util.newBuffer(object.seeds);
                                }
                                object.supportedCompressions = options.enums === String ? "COMPRESSIONCOMPATIBLEPROTO2" : 0;
                            }
                            if (message.communicationEncoding != null && message.hasOwnProperty("communicationEncoding")) {
                                object.communicationEncoding = message.communicationEncoding;
                                if (options.oneofs)
                                    object.communicationEncodingPresent = "communicationEncoding";
                            }
                            if (message.seeds != null && message.hasOwnProperty("seeds"))
                                object.seeds = options.bytes === String ? $util.base64.encode(message.seeds, 0, message.seeds.length) : options.bytes === Array ? Array.prototype.slice.call(message.seeds) : message.seeds;
                            if (message.supportedCompressions != null && message.hasOwnProperty("supportedCompressions"))
                                object.supportedCompressions = options.enums === String ? $root.com.alibaba.otter.canal.protocol.Compression[message.supportedCompressions] === undefined ? message.supportedCompressions : $root.com.alibaba.otter.canal.protocol.Compression[message.supportedCompressions] : message.supportedCompressions;
                            return object;
                        };

                        /**
                         * Converts this Handshake to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Handshake.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Handshake
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Handshake
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Handshake.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Handshake";
                        };

                        return Handshake;
                    })();

                    protocol.ClientAuth = (function() {

                        /**
                         * Properties of a ClientAuth.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IClientAuth
                         * @property {string|null} [username] ClientAuth username
                         * @property {Uint8Array|null} [password] ClientAuth password
                         * @property {number|null} [netReadTimeout] ClientAuth netReadTimeout
                         * @property {number|null} [netWriteTimeout] ClientAuth netWriteTimeout
                         * @property {string|null} [destination] ClientAuth destination
                         * @property {string|null} [clientId] ClientAuth clientId
                         * @property {string|null} [filter] ClientAuth filter
                         * @property {number|Long|null} [startTimestamp] ClientAuth startTimestamp
                         */

                        /**
                         * Constructs a new ClientAuth.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a ClientAuth.
                         * @implements IClientAuth
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IClientAuth=} [properties] Properties to set
                         */
                        function ClientAuth(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ClientAuth username.
                         * @member {string} username
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        ClientAuth.prototype.username = "";

                        /**
                         * ClientAuth password.
                         * @member {Uint8Array} password
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        ClientAuth.prototype.password = $util.newBuffer([]);

                        /**
                         * ClientAuth netReadTimeout.
                         * @member {number|null|undefined} netReadTimeout
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        ClientAuth.prototype.netReadTimeout = null;

                        /**
                         * ClientAuth netWriteTimeout.
                         * @member {number|null|undefined} netWriteTimeout
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        ClientAuth.prototype.netWriteTimeout = null;

                        /**
                         * ClientAuth destination.
                         * @member {string} destination
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        ClientAuth.prototype.destination = "";

                        /**
                         * ClientAuth clientId.
                         * @member {string} clientId
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        ClientAuth.prototype.clientId = "";

                        /**
                         * ClientAuth filter.
                         * @member {string} filter
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        ClientAuth.prototype.filter = "";

                        /**
                         * ClientAuth startTimestamp.
                         * @member {number|Long} startTimestamp
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        ClientAuth.prototype.startTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * ClientAuth netReadTimeoutPresent.
                         * @member {"netReadTimeout"|undefined} netReadTimeoutPresent
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        Object.defineProperty(ClientAuth.prototype, "netReadTimeoutPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["netReadTimeout"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * ClientAuth netWriteTimeoutPresent.
                         * @member {"netWriteTimeout"|undefined} netWriteTimeoutPresent
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         */
                        Object.defineProperty(ClientAuth.prototype, "netWriteTimeoutPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["netWriteTimeout"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new ClientAuth instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IClientAuth=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.ClientAuth} ClientAuth instance
                         */
                        ClientAuth.create = function create(properties) {
                            return new ClientAuth(properties);
                        };

                        /**
                         * Encodes the specified ClientAuth message. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientAuth.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IClientAuth} message ClientAuth message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ClientAuth.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.password);
                            if (message.netReadTimeout != null && Object.hasOwnProperty.call(message, "netReadTimeout"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.netReadTimeout);
                            if (message.netWriteTimeout != null && Object.hasOwnProperty.call(message, "netWriteTimeout"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.netWriteTimeout);
                            if (message.destination != null && Object.hasOwnProperty.call(message, "destination"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.destination);
                            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.clientId);
                            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.filter);
                            if (message.startTimestamp != null && Object.hasOwnProperty.call(message, "startTimestamp"))
                                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.startTimestamp);
                            return writer;
                        };

                        /**
                         * Encodes the specified ClientAuth message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientAuth.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IClientAuth} message ClientAuth message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ClientAuth.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ClientAuth message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.ClientAuth} ClientAuth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ClientAuth.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.ClientAuth();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.username = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.password = reader.bytes();
                                        break;
                                    }
                                case 3: {
                                        message.netReadTimeout = reader.int32();
                                        break;
                                    }
                                case 4: {
                                        message.netWriteTimeout = reader.int32();
                                        break;
                                    }
                                case 5: {
                                        message.destination = reader.string();
                                        break;
                                    }
                                case 6: {
                                        message.clientId = reader.string();
                                        break;
                                    }
                                case 7: {
                                        message.filter = reader.string();
                                        break;
                                    }
                                case 8: {
                                        message.startTimestamp = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ClientAuth message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.ClientAuth} ClientAuth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ClientAuth.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ClientAuth message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ClientAuth.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.username != null && message.hasOwnProperty("username"))
                                if (!$util.isString(message.username))
                                    return "username: string expected";
                            if (message.password != null && message.hasOwnProperty("password"))
                                if (!(message.password && typeof message.password.length === "number" || $util.isString(message.password)))
                                    return "password: buffer expected";
                            if (message.netReadTimeout != null && message.hasOwnProperty("netReadTimeout")) {
                                properties.netReadTimeoutPresent = 1;
                                if (!$util.isInteger(message.netReadTimeout))
                                    return "netReadTimeout: integer expected";
                            }
                            if (message.netWriteTimeout != null && message.hasOwnProperty("netWriteTimeout")) {
                                properties.netWriteTimeoutPresent = 1;
                                if (!$util.isInteger(message.netWriteTimeout))
                                    return "netWriteTimeout: integer expected";
                            }
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                if (!$util.isString(message.destination))
                                    return "destination: string expected";
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                if (!$util.isString(message.clientId))
                                    return "clientId: string expected";
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                if (!$util.isString(message.filter))
                                    return "filter: string expected";
                            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                                if (!$util.isInteger(message.startTimestamp) && !(message.startTimestamp && $util.isInteger(message.startTimestamp.low) && $util.isInteger(message.startTimestamp.high)))
                                    return "startTimestamp: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a ClientAuth message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.ClientAuth} ClientAuth
                         */
                        ClientAuth.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.ClientAuth)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.ClientAuth();
                            if (object.username != null)
                                message.username = String(object.username);
                            if (object.password != null)
                                if (typeof object.password === "string")
                                    $util.base64.decode(object.password, message.password = $util.newBuffer($util.base64.length(object.password)), 0);
                                else if (object.password.length >= 0)
                                    message.password = object.password;
                            if (object.netReadTimeout != null)
                                message.netReadTimeout = object.netReadTimeout | 0;
                            if (object.netWriteTimeout != null)
                                message.netWriteTimeout = object.netWriteTimeout | 0;
                            if (object.destination != null)
                                message.destination = String(object.destination);
                            if (object.clientId != null)
                                message.clientId = String(object.clientId);
                            if (object.filter != null)
                                message.filter = String(object.filter);
                            if (object.startTimestamp != null)
                                if ($util.Long)
                                    (message.startTimestamp = $util.Long.fromValue(object.startTimestamp)).unsigned = false;
                                else if (typeof object.startTimestamp === "string")
                                    message.startTimestamp = parseInt(object.startTimestamp, 10);
                                else if (typeof object.startTimestamp === "number")
                                    message.startTimestamp = object.startTimestamp;
                                else if (typeof object.startTimestamp === "object")
                                    message.startTimestamp = new $util.LongBits(object.startTimestamp.low >>> 0, object.startTimestamp.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a ClientAuth message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ClientAuth} message ClientAuth
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ClientAuth.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.username = "";
                                if (options.bytes === String)
                                    object.password = "";
                                else {
                                    object.password = [];
                                    if (options.bytes !== Array)
                                        object.password = $util.newBuffer(object.password);
                                }
                                object.destination = "";
                                object.clientId = "";
                                object.filter = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.startTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.startTimestamp = options.longs === String ? "0" : 0;
                            }
                            if (message.username != null && message.hasOwnProperty("username"))
                                object.username = message.username;
                            if (message.password != null && message.hasOwnProperty("password"))
                                object.password = options.bytes === String ? $util.base64.encode(message.password, 0, message.password.length) : options.bytes === Array ? Array.prototype.slice.call(message.password) : message.password;
                            if (message.netReadTimeout != null && message.hasOwnProperty("netReadTimeout")) {
                                object.netReadTimeout = message.netReadTimeout;
                                if (options.oneofs)
                                    object.netReadTimeoutPresent = "netReadTimeout";
                            }
                            if (message.netWriteTimeout != null && message.hasOwnProperty("netWriteTimeout")) {
                                object.netWriteTimeout = message.netWriteTimeout;
                                if (options.oneofs)
                                    object.netWriteTimeoutPresent = "netWriteTimeout";
                            }
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                object.destination = message.destination;
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                object.clientId = message.clientId;
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                object.filter = message.filter;
                            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                                if (typeof message.startTimestamp === "number")
                                    object.startTimestamp = options.longs === String ? String(message.startTimestamp) : message.startTimestamp;
                                else
                                    object.startTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.startTimestamp) : options.longs === Number ? new $util.LongBits(message.startTimestamp.low >>> 0, message.startTimestamp.high >>> 0).toNumber() : message.startTimestamp;
                            return object;
                        };

                        /**
                         * Converts this ClientAuth to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ClientAuth.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ClientAuth
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.ClientAuth
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ClientAuth.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.ClientAuth";
                        };

                        return ClientAuth;
                    })();

                    protocol.Ack = (function() {

                        /**
                         * Properties of an Ack.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IAck
                         * @property {number|null} [errorCode] Ack errorCode
                         * @property {string|null} [errorMessage] Ack errorMessage
                         */

                        /**
                         * Constructs a new Ack.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents an Ack.
                         * @implements IAck
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IAck=} [properties] Properties to set
                         */
                        function Ack(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Ack errorCode.
                         * @member {number|null|undefined} errorCode
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @instance
                         */
                        Ack.prototype.errorCode = null;

                        /**
                         * Ack errorMessage.
                         * @member {string} errorMessage
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @instance
                         */
                        Ack.prototype.errorMessage = "";

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * Ack errorCodePresent.
                         * @member {"errorCode"|undefined} errorCodePresent
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @instance
                         */
                        Object.defineProperty(Ack.prototype, "errorCodePresent", {
                            get: $util.oneOfGetter($oneOfFields = ["errorCode"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Ack instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IAck=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Ack} Ack instance
                         */
                        Ack.create = function create(properties) {
                            return new Ack(properties);
                        };

                        /**
                         * Encodes the specified Ack message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Ack.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IAck} message Ack message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Ack.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
                            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
                            return writer;
                        };

                        /**
                         * Encodes the specified Ack message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Ack.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IAck} message Ack message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Ack.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Ack message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Ack} Ack
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Ack.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Ack();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.errorCode = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.errorMessage = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Ack message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Ack} Ack
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Ack.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Ack message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Ack.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.errorCode != null && message.hasOwnProperty("errorCode")) {
                                properties.errorCodePresent = 1;
                                if (!$util.isInteger(message.errorCode))
                                    return "errorCode: integer expected";
                            }
                            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                                if (!$util.isString(message.errorMessage))
                                    return "errorMessage: string expected";
                            return null;
                        };

                        /**
                         * Creates an Ack message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Ack} Ack
                         */
                        Ack.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Ack)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Ack();
                            if (object.errorCode != null)
                                message.errorCode = object.errorCode | 0;
                            if (object.errorMessage != null)
                                message.errorMessage = String(object.errorMessage);
                            return message;
                        };

                        /**
                         * Creates a plain object from an Ack message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Ack} message Ack
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Ack.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.errorMessage = "";
                            if (message.errorCode != null && message.hasOwnProperty("errorCode")) {
                                object.errorCode = message.errorCode;
                                if (options.oneofs)
                                    object.errorCodePresent = "errorCode";
                            }
                            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                                object.errorMessage = message.errorMessage;
                            return object;
                        };

                        /**
                         * Converts this Ack to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Ack.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Ack
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Ack
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Ack.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Ack";
                        };

                        return Ack;
                    })();

                    protocol.ClientAck = (function() {

                        /**
                         * Properties of a ClientAck.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IClientAck
                         * @property {string|null} [destination] ClientAck destination
                         * @property {string|null} [clientId] ClientAck clientId
                         * @property {number|Long|null} [batchId] ClientAck batchId
                         */

                        /**
                         * Constructs a new ClientAck.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a ClientAck.
                         * @implements IClientAck
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IClientAck=} [properties] Properties to set
                         */
                        function ClientAck(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ClientAck destination.
                         * @member {string} destination
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @instance
                         */
                        ClientAck.prototype.destination = "";

                        /**
                         * ClientAck clientId.
                         * @member {string} clientId
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @instance
                         */
                        ClientAck.prototype.clientId = "";

                        /**
                         * ClientAck batchId.
                         * @member {number|Long} batchId
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @instance
                         */
                        ClientAck.prototype.batchId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new ClientAck instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IClientAck=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.ClientAck} ClientAck instance
                         */
                        ClientAck.create = function create(properties) {
                            return new ClientAck(properties);
                        };

                        /**
                         * Encodes the specified ClientAck message. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientAck.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IClientAck} message ClientAck message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ClientAck.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.destination != null && Object.hasOwnProperty.call(message, "destination"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.destination);
                            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientId);
                            if (message.batchId != null && Object.hasOwnProperty.call(message, "batchId"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.batchId);
                            return writer;
                        };

                        /**
                         * Encodes the specified ClientAck message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientAck.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IClientAck} message ClientAck message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ClientAck.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ClientAck message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.ClientAck} ClientAck
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ClientAck.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.ClientAck();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.destination = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.clientId = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.batchId = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ClientAck message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.ClientAck} ClientAck
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ClientAck.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ClientAck message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ClientAck.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                if (!$util.isString(message.destination))
                                    return "destination: string expected";
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                if (!$util.isString(message.clientId))
                                    return "clientId: string expected";
                            if (message.batchId != null && message.hasOwnProperty("batchId"))
                                if (!$util.isInteger(message.batchId) && !(message.batchId && $util.isInteger(message.batchId.low) && $util.isInteger(message.batchId.high)))
                                    return "batchId: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a ClientAck message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.ClientAck} ClientAck
                         */
                        ClientAck.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.ClientAck)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.ClientAck();
                            if (object.destination != null)
                                message.destination = String(object.destination);
                            if (object.clientId != null)
                                message.clientId = String(object.clientId);
                            if (object.batchId != null)
                                if ($util.Long)
                                    (message.batchId = $util.Long.fromValue(object.batchId)).unsigned = false;
                                else if (typeof object.batchId === "string")
                                    message.batchId = parseInt(object.batchId, 10);
                                else if (typeof object.batchId === "number")
                                    message.batchId = object.batchId;
                                else if (typeof object.batchId === "object")
                                    message.batchId = new $util.LongBits(object.batchId.low >>> 0, object.batchId.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a ClientAck message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ClientAck} message ClientAck
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ClientAck.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.destination = "";
                                object.clientId = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.batchId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.batchId = options.longs === String ? "0" : 0;
                            }
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                object.destination = message.destination;
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                object.clientId = message.clientId;
                            if (message.batchId != null && message.hasOwnProperty("batchId"))
                                if (typeof message.batchId === "number")
                                    object.batchId = options.longs === String ? String(message.batchId) : message.batchId;
                                else
                                    object.batchId = options.longs === String ? $util.Long.prototype.toString.call(message.batchId) : options.longs === Number ? new $util.LongBits(message.batchId.low >>> 0, message.batchId.high >>> 0).toNumber() : message.batchId;
                            return object;
                        };

                        /**
                         * Converts this ClientAck to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ClientAck.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ClientAck
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.ClientAck
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ClientAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.ClientAck";
                        };

                        return ClientAck;
                    })();

                    protocol.Sub = (function() {

                        /**
                         * Properties of a Sub.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface ISub
                         * @property {string|null} [destination] Sub destination
                         * @property {string|null} [clientId] Sub clientId
                         * @property {string|null} [filter] Sub filter
                         */

                        /**
                         * Constructs a new Sub.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a Sub.
                         * @implements ISub
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.ISub=} [properties] Properties to set
                         */
                        function Sub(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Sub destination.
                         * @member {string} destination
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @instance
                         */
                        Sub.prototype.destination = "";

                        /**
                         * Sub clientId.
                         * @member {string} clientId
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @instance
                         */
                        Sub.prototype.clientId = "";

                        /**
                         * Sub filter.
                         * @member {string} filter
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @instance
                         */
                        Sub.prototype.filter = "";

                        /**
                         * Creates a new Sub instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ISub=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Sub} Sub instance
                         */
                        Sub.create = function create(properties) {
                            return new Sub(properties);
                        };

                        /**
                         * Encodes the specified Sub message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Sub.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ISub} message Sub message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Sub.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.destination != null && Object.hasOwnProperty.call(message, "destination"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.destination);
                            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientId);
                            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.filter);
                            return writer;
                        };

                        /**
                         * Encodes the specified Sub message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Sub.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ISub} message Sub message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Sub.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Sub message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Sub} Sub
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Sub.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Sub();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.destination = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.clientId = reader.string();
                                        break;
                                    }
                                case 7: {
                                        message.filter = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Sub message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Sub} Sub
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Sub.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Sub message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Sub.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                if (!$util.isString(message.destination))
                                    return "destination: string expected";
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                if (!$util.isString(message.clientId))
                                    return "clientId: string expected";
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                if (!$util.isString(message.filter))
                                    return "filter: string expected";
                            return null;
                        };

                        /**
                         * Creates a Sub message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Sub} Sub
                         */
                        Sub.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Sub)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Sub();
                            if (object.destination != null)
                                message.destination = String(object.destination);
                            if (object.clientId != null)
                                message.clientId = String(object.clientId);
                            if (object.filter != null)
                                message.filter = String(object.filter);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Sub message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Sub} message Sub
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Sub.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.destination = "";
                                object.clientId = "";
                                object.filter = "";
                            }
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                object.destination = message.destination;
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                object.clientId = message.clientId;
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                object.filter = message.filter;
                            return object;
                        };

                        /**
                         * Converts this Sub to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Sub.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Sub
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Sub
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Sub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Sub";
                        };

                        return Sub;
                    })();

                    protocol.Unsub = (function() {

                        /**
                         * Properties of an Unsub.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IUnsub
                         * @property {string|null} [destination] Unsub destination
                         * @property {string|null} [clientId] Unsub clientId
                         * @property {string|null} [filter] Unsub filter
                         */

                        /**
                         * Constructs a new Unsub.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents an Unsub.
                         * @implements IUnsub
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IUnsub=} [properties] Properties to set
                         */
                        function Unsub(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Unsub destination.
                         * @member {string} destination
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @instance
                         */
                        Unsub.prototype.destination = "";

                        /**
                         * Unsub clientId.
                         * @member {string} clientId
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @instance
                         */
                        Unsub.prototype.clientId = "";

                        /**
                         * Unsub filter.
                         * @member {string} filter
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @instance
                         */
                        Unsub.prototype.filter = "";

                        /**
                         * Creates a new Unsub instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IUnsub=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Unsub} Unsub instance
                         */
                        Unsub.create = function create(properties) {
                            return new Unsub(properties);
                        };

                        /**
                         * Encodes the specified Unsub message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Unsub.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IUnsub} message Unsub message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Unsub.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.destination != null && Object.hasOwnProperty.call(message, "destination"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.destination);
                            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientId);
                            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.filter);
                            return writer;
                        };

                        /**
                         * Encodes the specified Unsub message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Unsub.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IUnsub} message Unsub message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Unsub.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Unsub message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Unsub} Unsub
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Unsub.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Unsub();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.destination = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.clientId = reader.string();
                                        break;
                                    }
                                case 7: {
                                        message.filter = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Unsub message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Unsub} Unsub
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Unsub.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Unsub message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Unsub.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                if (!$util.isString(message.destination))
                                    return "destination: string expected";
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                if (!$util.isString(message.clientId))
                                    return "clientId: string expected";
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                if (!$util.isString(message.filter))
                                    return "filter: string expected";
                            return null;
                        };

                        /**
                         * Creates an Unsub message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Unsub} Unsub
                         */
                        Unsub.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Unsub)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Unsub();
                            if (object.destination != null)
                                message.destination = String(object.destination);
                            if (object.clientId != null)
                                message.clientId = String(object.clientId);
                            if (object.filter != null)
                                message.filter = String(object.filter);
                            return message;
                        };

                        /**
                         * Creates a plain object from an Unsub message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Unsub} message Unsub
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Unsub.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.destination = "";
                                object.clientId = "";
                                object.filter = "";
                            }
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                object.destination = message.destination;
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                object.clientId = message.clientId;
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                object.filter = message.filter;
                            return object;
                        };

                        /**
                         * Converts this Unsub to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Unsub.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Unsub
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Unsub
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Unsub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Unsub";
                        };

                        return Unsub;
                    })();

                    protocol.Get = (function() {

                        /**
                         * Properties of a Get.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IGet
                         * @property {string|null} [destination] Get destination
                         * @property {string|null} [clientId] Get clientId
                         * @property {number|null} [fetchSize] Get fetchSize
                         * @property {number|Long|null} [timeout] Get timeout
                         * @property {number|null} [unit] Get unit
                         * @property {boolean|null} [autoAck] Get autoAck
                         */

                        /**
                         * Constructs a new Get.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a Get.
                         * @implements IGet
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IGet=} [properties] Properties to set
                         */
                        function Get(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Get destination.
                         * @member {string} destination
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         */
                        Get.prototype.destination = "";

                        /**
                         * Get clientId.
                         * @member {string} clientId
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         */
                        Get.prototype.clientId = "";

                        /**
                         * Get fetchSize.
                         * @member {number} fetchSize
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         */
                        Get.prototype.fetchSize = 0;

                        /**
                         * Get timeout.
                         * @member {number|Long|null|undefined} timeout
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         */
                        Get.prototype.timeout = null;

                        /**
                         * Get unit.
                         * @member {number|null|undefined} unit
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         */
                        Get.prototype.unit = null;

                        /**
                         * Get autoAck.
                         * @member {boolean|null|undefined} autoAck
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         */
                        Get.prototype.autoAck = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * Get timeoutPresent.
                         * @member {"timeout"|undefined} timeoutPresent
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         */
                        Object.defineProperty(Get.prototype, "timeoutPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["timeout"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Get unitPresent.
                         * @member {"unit"|undefined} unitPresent
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         */
                        Object.defineProperty(Get.prototype, "unitPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["unit"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Get autoAckPresent.
                         * @member {"autoAck"|undefined} autoAckPresent
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         */
                        Object.defineProperty(Get.prototype, "autoAckPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["autoAck"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Get instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IGet=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Get} Get instance
                         */
                        Get.create = function create(properties) {
                            return new Get(properties);
                        };

                        /**
                         * Encodes the specified Get message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Get.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IGet} message Get message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Get.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.destination != null && Object.hasOwnProperty.call(message, "destination"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.destination);
                            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientId);
                            if (message.fetchSize != null && Object.hasOwnProperty.call(message, "fetchSize"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fetchSize);
                            if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timeout);
                            if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
                                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.unit);
                            if (message.autoAck != null && Object.hasOwnProperty.call(message, "autoAck"))
                                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.autoAck);
                            return writer;
                        };

                        /**
                         * Encodes the specified Get message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Get.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IGet} message Get message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Get.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Get message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Get} Get
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Get.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Get();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.destination = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.clientId = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.fetchSize = reader.int32();
                                        break;
                                    }
                                case 4: {
                                        message.timeout = reader.int64();
                                        break;
                                    }
                                case 5: {
                                        message.unit = reader.int32();
                                        break;
                                    }
                                case 6: {
                                        message.autoAck = reader.bool();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Get message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Get} Get
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Get.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Get message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Get.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                if (!$util.isString(message.destination))
                                    return "destination: string expected";
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                if (!$util.isString(message.clientId))
                                    return "clientId: string expected";
                            if (message.fetchSize != null && message.hasOwnProperty("fetchSize"))
                                if (!$util.isInteger(message.fetchSize))
                                    return "fetchSize: integer expected";
                            if (message.timeout != null && message.hasOwnProperty("timeout")) {
                                properties.timeoutPresent = 1;
                                if (!$util.isInteger(message.timeout) && !(message.timeout && $util.isInteger(message.timeout.low) && $util.isInteger(message.timeout.high)))
                                    return "timeout: integer|Long expected";
                            }
                            if (message.unit != null && message.hasOwnProperty("unit")) {
                                properties.unitPresent = 1;
                                if (!$util.isInteger(message.unit))
                                    return "unit: integer expected";
                            }
                            if (message.autoAck != null && message.hasOwnProperty("autoAck")) {
                                properties.autoAckPresent = 1;
                                if (typeof message.autoAck !== "boolean")
                                    return "autoAck: boolean expected";
                            }
                            return null;
                        };

                        /**
                         * Creates a Get message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Get} Get
                         */
                        Get.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Get)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Get();
                            if (object.destination != null)
                                message.destination = String(object.destination);
                            if (object.clientId != null)
                                message.clientId = String(object.clientId);
                            if (object.fetchSize != null)
                                message.fetchSize = object.fetchSize | 0;
                            if (object.timeout != null)
                                if ($util.Long)
                                    (message.timeout = $util.Long.fromValue(object.timeout)).unsigned = false;
                                else if (typeof object.timeout === "string")
                                    message.timeout = parseInt(object.timeout, 10);
                                else if (typeof object.timeout === "number")
                                    message.timeout = object.timeout;
                                else if (typeof object.timeout === "object")
                                    message.timeout = new $util.LongBits(object.timeout.low >>> 0, object.timeout.high >>> 0).toNumber();
                            if (object.unit != null)
                                message.unit = object.unit | 0;
                            if (object.autoAck != null)
                                message.autoAck = Boolean(object.autoAck);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Get message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Get} message Get
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Get.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.destination = "";
                                object.clientId = "";
                                object.fetchSize = 0;
                            }
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                object.destination = message.destination;
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                object.clientId = message.clientId;
                            if (message.fetchSize != null && message.hasOwnProperty("fetchSize"))
                                object.fetchSize = message.fetchSize;
                            if (message.timeout != null && message.hasOwnProperty("timeout")) {
                                if (typeof message.timeout === "number")
                                    object.timeout = options.longs === String ? String(message.timeout) : message.timeout;
                                else
                                    object.timeout = options.longs === String ? $util.Long.prototype.toString.call(message.timeout) : options.longs === Number ? new $util.LongBits(message.timeout.low >>> 0, message.timeout.high >>> 0).toNumber() : message.timeout;
                                if (options.oneofs)
                                    object.timeoutPresent = "timeout";
                            }
                            if (message.unit != null && message.hasOwnProperty("unit")) {
                                object.unit = message.unit;
                                if (options.oneofs)
                                    object.unitPresent = "unit";
                            }
                            if (message.autoAck != null && message.hasOwnProperty("autoAck")) {
                                object.autoAck = message.autoAck;
                                if (options.oneofs)
                                    object.autoAckPresent = "autoAck";
                            }
                            return object;
                        };

                        /**
                         * Converts this Get to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Get.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Get
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Get
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Get.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Get";
                        };

                        return Get;
                    })();

                    protocol.Messages = (function() {

                        /**
                         * Properties of a Messages.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IMessages
                         * @property {number|Long|null} [batchId] Messages batchId
                         * @property {Array.<Uint8Array>|null} [messages] Messages messages
                         */

                        /**
                         * Constructs a new Messages.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a Messages.
                         * @implements IMessages
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IMessages=} [properties] Properties to set
                         */
                        function Messages(properties) {
                            this.messages = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Messages batchId.
                         * @member {number|Long} batchId
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @instance
                         */
                        Messages.prototype.batchId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Messages messages.
                         * @member {Array.<Uint8Array>} messages
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @instance
                         */
                        Messages.prototype.messages = $util.emptyArray;

                        /**
                         * Creates a new Messages instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IMessages=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Messages} Messages instance
                         */
                        Messages.create = function create(properties) {
                            return new Messages(properties);
                        };

                        /**
                         * Encodes the specified Messages message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Messages.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IMessages} message Messages message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Messages.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.batchId != null && Object.hasOwnProperty.call(message, "batchId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.batchId);
                            if (message.messages != null && message.messages.length)
                                for (var i = 0; i < message.messages.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.messages[i]);
                            return writer;
                        };

                        /**
                         * Encodes the specified Messages message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Messages.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IMessages} message Messages message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Messages.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Messages message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Messages} Messages
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Messages.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Messages();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.batchId = reader.int64();
                                        break;
                                    }
                                case 2: {
                                        if (!(message.messages && message.messages.length))
                                            message.messages = [];
                                        message.messages.push(reader.bytes());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Messages message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Messages} Messages
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Messages.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Messages message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Messages.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.batchId != null && message.hasOwnProperty("batchId"))
                                if (!$util.isInteger(message.batchId) && !(message.batchId && $util.isInteger(message.batchId.low) && $util.isInteger(message.batchId.high)))
                                    return "batchId: integer|Long expected";
                            if (message.messages != null && message.hasOwnProperty("messages")) {
                                if (!Array.isArray(message.messages))
                                    return "messages: array expected";
                                for (var i = 0; i < message.messages.length; ++i)
                                    if (!(message.messages[i] && typeof message.messages[i].length === "number" || $util.isString(message.messages[i])))
                                        return "messages: buffer[] expected";
                            }
                            return null;
                        };

                        /**
                         * Creates a Messages message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Messages} Messages
                         */
                        Messages.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Messages)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Messages();
                            if (object.batchId != null)
                                if ($util.Long)
                                    (message.batchId = $util.Long.fromValue(object.batchId)).unsigned = false;
                                else if (typeof object.batchId === "string")
                                    message.batchId = parseInt(object.batchId, 10);
                                else if (typeof object.batchId === "number")
                                    message.batchId = object.batchId;
                                else if (typeof object.batchId === "object")
                                    message.batchId = new $util.LongBits(object.batchId.low >>> 0, object.batchId.high >>> 0).toNumber();
                            if (object.messages) {
                                if (!Array.isArray(object.messages))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.Messages.messages: array expected");
                                message.messages = [];
                                for (var i = 0; i < object.messages.length; ++i)
                                    if (typeof object.messages[i] === "string")
                                        $util.base64.decode(object.messages[i], message.messages[i] = $util.newBuffer($util.base64.length(object.messages[i])), 0);
                                    else if (object.messages[i].length >= 0)
                                        message.messages[i] = object.messages[i];
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Messages message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Messages} message Messages
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Messages.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.messages = [];
                            if (options.defaults)
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.batchId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.batchId = options.longs === String ? "0" : 0;
                            if (message.batchId != null && message.hasOwnProperty("batchId"))
                                if (typeof message.batchId === "number")
                                    object.batchId = options.longs === String ? String(message.batchId) : message.batchId;
                                else
                                    object.batchId = options.longs === String ? $util.Long.prototype.toString.call(message.batchId) : options.longs === Number ? new $util.LongBits(message.batchId.low >>> 0, message.batchId.high >>> 0).toNumber() : message.batchId;
                            if (message.messages && message.messages.length) {
                                object.messages = [];
                                for (var j = 0; j < message.messages.length; ++j)
                                    object.messages[j] = options.bytes === String ? $util.base64.encode(message.messages[j], 0, message.messages[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.messages[j]) : message.messages[j];
                            }
                            return object;
                        };

                        /**
                         * Converts this Messages to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Messages.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Messages
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Messages
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Messages.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Messages";
                        };

                        return Messages;
                    })();

                    protocol.Dump = (function() {

                        /**
                         * Properties of a Dump.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IDump
                         * @property {string|null} [journal] Dump journal
                         * @property {number|Long|null} [position] Dump position
                         * @property {number|Long|null} [timestamp] Dump timestamp
                         */

                        /**
                         * Constructs a new Dump.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a Dump.
                         * @implements IDump
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IDump=} [properties] Properties to set
                         */
                        function Dump(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Dump journal.
                         * @member {string} journal
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @instance
                         */
                        Dump.prototype.journal = "";

                        /**
                         * Dump position.
                         * @member {number|Long} position
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @instance
                         */
                        Dump.prototype.position = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Dump timestamp.
                         * @member {number|Long|null|undefined} timestamp
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @instance
                         */
                        Dump.prototype.timestamp = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * Dump timestampPresent.
                         * @member {"timestamp"|undefined} timestampPresent
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @instance
                         */
                        Object.defineProperty(Dump.prototype, "timestampPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Dump instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IDump=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Dump} Dump instance
                         */
                        Dump.create = function create(properties) {
                            return new Dump(properties);
                        };

                        /**
                         * Encodes the specified Dump message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Dump.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IDump} message Dump message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Dump.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.journal != null && Object.hasOwnProperty.call(message, "journal"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.journal);
                            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.position);
                            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
                            return writer;
                        };

                        /**
                         * Encodes the specified Dump message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Dump.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IDump} message Dump message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Dump.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Dump message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Dump} Dump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Dump.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Dump();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.journal = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.position = reader.int64();
                                        break;
                                    }
                                case 3: {
                                        message.timestamp = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Dump message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Dump} Dump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Dump.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Dump message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Dump.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.journal != null && message.hasOwnProperty("journal"))
                                if (!$util.isString(message.journal))
                                    return "journal: string expected";
                            if (message.position != null && message.hasOwnProperty("position"))
                                if (!$util.isInteger(message.position) && !(message.position && $util.isInteger(message.position.low) && $util.isInteger(message.position.high)))
                                    return "position: integer|Long expected";
                            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                                properties.timestampPresent = 1;
                                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                    return "timestamp: integer|Long expected";
                            }
                            return null;
                        };

                        /**
                         * Creates a Dump message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Dump} Dump
                         */
                        Dump.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Dump)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Dump();
                            if (object.journal != null)
                                message.journal = String(object.journal);
                            if (object.position != null)
                                if ($util.Long)
                                    (message.position = $util.Long.fromValue(object.position)).unsigned = false;
                                else if (typeof object.position === "string")
                                    message.position = parseInt(object.position, 10);
                                else if (typeof object.position === "number")
                                    message.position = object.position;
                                else if (typeof object.position === "object")
                                    message.position = new $util.LongBits(object.position.low >>> 0, object.position.high >>> 0).toNumber();
                            if (object.timestamp != null)
                                if ($util.Long)
                                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                                else if (typeof object.timestamp === "string")
                                    message.timestamp = parseInt(object.timestamp, 10);
                                else if (typeof object.timestamp === "number")
                                    message.timestamp = object.timestamp;
                                else if (typeof object.timestamp === "object")
                                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a Dump message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Dump} message Dump
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Dump.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.journal = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.position = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.position = options.longs === String ? "0" : 0;
                            }
                            if (message.journal != null && message.hasOwnProperty("journal"))
                                object.journal = message.journal;
                            if (message.position != null && message.hasOwnProperty("position"))
                                if (typeof message.position === "number")
                                    object.position = options.longs === String ? String(message.position) : message.position;
                                else
                                    object.position = options.longs === String ? $util.Long.prototype.toString.call(message.position) : options.longs === Number ? new $util.LongBits(message.position.low >>> 0, message.position.high >>> 0).toNumber() : message.position;
                            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                                if (typeof message.timestamp === "number")
                                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                                else
                                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                                if (options.oneofs)
                                    object.timestampPresent = "timestamp";
                            }
                            return object;
                        };

                        /**
                         * Converts this Dump to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Dump.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Dump
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Dump
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Dump.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Dump";
                        };

                        return Dump;
                    })();

                    protocol.ClientRollback = (function() {

                        /**
                         * Properties of a ClientRollback.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IClientRollback
                         * @property {string|null} [destination] ClientRollback destination
                         * @property {string|null} [clientId] ClientRollback clientId
                         * @property {number|Long|null} [batchId] ClientRollback batchId
                         */

                        /**
                         * Constructs a new ClientRollback.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a ClientRollback.
                         * @implements IClientRollback
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IClientRollback=} [properties] Properties to set
                         */
                        function ClientRollback(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ClientRollback destination.
                         * @member {string} destination
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @instance
                         */
                        ClientRollback.prototype.destination = "";

                        /**
                         * ClientRollback clientId.
                         * @member {string} clientId
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @instance
                         */
                        ClientRollback.prototype.clientId = "";

                        /**
                         * ClientRollback batchId.
                         * @member {number|Long} batchId
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @instance
                         */
                        ClientRollback.prototype.batchId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new ClientRollback instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IClientRollback=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.ClientRollback} ClientRollback instance
                         */
                        ClientRollback.create = function create(properties) {
                            return new ClientRollback(properties);
                        };

                        /**
                         * Encodes the specified ClientRollback message. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientRollback.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IClientRollback} message ClientRollback message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ClientRollback.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.destination != null && Object.hasOwnProperty.call(message, "destination"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.destination);
                            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientId);
                            if (message.batchId != null && Object.hasOwnProperty.call(message, "batchId"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.batchId);
                            return writer;
                        };

                        /**
                         * Encodes the specified ClientRollback message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.ClientRollback.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IClientRollback} message ClientRollback message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ClientRollback.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ClientRollback message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.ClientRollback} ClientRollback
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ClientRollback.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.ClientRollback();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.destination = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.clientId = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.batchId = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ClientRollback message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.ClientRollback} ClientRollback
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ClientRollback.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ClientRollback message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ClientRollback.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                if (!$util.isString(message.destination))
                                    return "destination: string expected";
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                if (!$util.isString(message.clientId))
                                    return "clientId: string expected";
                            if (message.batchId != null && message.hasOwnProperty("batchId"))
                                if (!$util.isInteger(message.batchId) && !(message.batchId && $util.isInteger(message.batchId.low) && $util.isInteger(message.batchId.high)))
                                    return "batchId: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a ClientRollback message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.ClientRollback} ClientRollback
                         */
                        ClientRollback.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.ClientRollback)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.ClientRollback();
                            if (object.destination != null)
                                message.destination = String(object.destination);
                            if (object.clientId != null)
                                message.clientId = String(object.clientId);
                            if (object.batchId != null)
                                if ($util.Long)
                                    (message.batchId = $util.Long.fromValue(object.batchId)).unsigned = false;
                                else if (typeof object.batchId === "string")
                                    message.batchId = parseInt(object.batchId, 10);
                                else if (typeof object.batchId === "number")
                                    message.batchId = object.batchId;
                                else if (typeof object.batchId === "object")
                                    message.batchId = new $util.LongBits(object.batchId.low >>> 0, object.batchId.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a ClientRollback message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ClientRollback} message ClientRollback
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ClientRollback.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.destination = "";
                                object.clientId = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.batchId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.batchId = options.longs === String ? "0" : 0;
                            }
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                object.destination = message.destination;
                            if (message.clientId != null && message.hasOwnProperty("clientId"))
                                object.clientId = message.clientId;
                            if (message.batchId != null && message.hasOwnProperty("batchId"))
                                if (typeof message.batchId === "number")
                                    object.batchId = options.longs === String ? String(message.batchId) : message.batchId;
                                else
                                    object.batchId = options.longs === String ? $util.Long.prototype.toString.call(message.batchId) : options.longs === Number ? new $util.LongBits(message.batchId.low >>> 0, message.batchId.high >>> 0).toNumber() : message.batchId;
                            return object;
                        };

                        /**
                         * Converts this ClientRollback to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ClientRollback.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for ClientRollback
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.ClientRollback
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ClientRollback.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.ClientRollback";
                        };

                        return ClientRollback;
                    })();

                    protocol.Entry = (function() {

                        /**
                         * Properties of an Entry.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IEntry
                         * @property {com.alibaba.otter.canal.protocol.IHeader|null} [header] 协议头部信息*
                         * @property {com.alibaba.otter.canal.protocol.EntryType|null} [entryType] Entry entryType
                         * @property {Uint8Array|null} [storeValue] 传输的二进制数组*
                         */

                        /**
                         * Constructs a new Entry.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc message model
                         * 如果要在Enum中新增类型，确保以前的类型的下标值不变.
                         * @implements IEntry
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IEntry=} [properties] Properties to set
                         */
                        function Entry(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * 协议头部信息*
                         * @member {com.alibaba.otter.canal.protocol.IHeader|null|undefined} header
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @instance
                         */
                        Entry.prototype.header = null;

                        /**
                         * Entry entryType.
                         * @member {com.alibaba.otter.canal.protocol.EntryType|null|undefined} entryType
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @instance
                         */
                        Entry.prototype.entryType = null;

                        /**
                         * 传输的二进制数组*
                         * @member {Uint8Array} storeValue
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @instance
                         */
                        Entry.prototype.storeValue = $util.newBuffer([]);

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * 打散后的事件类型** / [default = ROWDATA]
                         * @member {"entryType"|undefined} entryTypePresent
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @instance
                         */
                        Object.defineProperty(Entry.prototype, "entryTypePresent", {
                            get: $util.oneOfGetter($oneOfFields = ["entryType"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Entry instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IEntry=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Entry} Entry instance
                         */
                        Entry.create = function create(properties) {
                            return new Entry(properties);
                        };

                        /**
                         * Encodes the specified Entry message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Entry.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IEntry} message Entry message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Entry.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                                $root.com.alibaba.otter.canal.protocol.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.entryType != null && Object.hasOwnProperty.call(message, "entryType"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.entryType);
                            if (message.storeValue != null && Object.hasOwnProperty.call(message, "storeValue"))
                                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.storeValue);
                            return writer;
                        };

                        /**
                         * Encodes the specified Entry message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Entry.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IEntry} message Entry message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Entry.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Entry message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Entry} Entry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Entry.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Entry();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.header = $root.com.alibaba.otter.canal.protocol.Header.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.entryType = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.storeValue = reader.bytes();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Entry message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Entry} Entry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Entry.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Entry message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Entry.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.header != null && message.hasOwnProperty("header")) {
                                var error = $root.com.alibaba.otter.canal.protocol.Header.verify(message.header);
                                if (error)
                                    return "header." + error;
                            }
                            if (message.entryType != null && message.hasOwnProperty("entryType")) {
                                properties.entryTypePresent = 1;
                                switch (message.entryType) {
                                default:
                                    return "entryType: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    break;
                                }
                            }
                            if (message.storeValue != null && message.hasOwnProperty("storeValue"))
                                if (!(message.storeValue && typeof message.storeValue.length === "number" || $util.isString(message.storeValue)))
                                    return "storeValue: buffer expected";
                            return null;
                        };

                        /**
                         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Entry} Entry
                         */
                        Entry.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Entry)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Entry();
                            if (object.header != null) {
                                if (typeof object.header !== "object")
                                    throw TypeError(".com.alibaba.otter.canal.protocol.Entry.header: object expected");
                                message.header = $root.com.alibaba.otter.canal.protocol.Header.fromObject(object.header);
                            }
                            switch (object.entryType) {
                            default:
                                if (typeof object.entryType === "number") {
                                    message.entryType = object.entryType;
                                    break;
                                }
                                break;
                            case "ENTRYTYPECOMPATIBLEPROTO2":
                            case 0:
                                message.entryType = 0;
                                break;
                            case "TRANSACTIONBEGIN":
                            case 1:
                                message.entryType = 1;
                                break;
                            case "ROWDATA":
                            case 2:
                                message.entryType = 2;
                                break;
                            case "TRANSACTIONEND":
                            case 3:
                                message.entryType = 3;
                                break;
                            case "HEARTBEAT":
                            case 4:
                                message.entryType = 4;
                                break;
                            case "GTIDLOG":
                            case 5:
                                message.entryType = 5;
                                break;
                            }
                            if (object.storeValue != null)
                                if (typeof object.storeValue === "string")
                                    $util.base64.decode(object.storeValue, message.storeValue = $util.newBuffer($util.base64.length(object.storeValue)), 0);
                                else if (object.storeValue.length >= 0)
                                    message.storeValue = object.storeValue;
                            return message;
                        };

                        /**
                         * Creates a plain object from an Entry message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Entry} message Entry
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Entry.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.header = null;
                                if (options.bytes === String)
                                    object.storeValue = "";
                                else {
                                    object.storeValue = [];
                                    if (options.bytes !== Array)
                                        object.storeValue = $util.newBuffer(object.storeValue);
                                }
                            }
                            if (message.header != null && message.hasOwnProperty("header"))
                                object.header = $root.com.alibaba.otter.canal.protocol.Header.toObject(message.header, options);
                            if (message.entryType != null && message.hasOwnProperty("entryType")) {
                                object.entryType = options.enums === String ? $root.com.alibaba.otter.canal.protocol.EntryType[message.entryType] === undefined ? message.entryType : $root.com.alibaba.otter.canal.protocol.EntryType[message.entryType] : message.entryType;
                                if (options.oneofs)
                                    object.entryTypePresent = "entryType";
                            }
                            if (message.storeValue != null && message.hasOwnProperty("storeValue"))
                                object.storeValue = options.bytes === String ? $util.base64.encode(message.storeValue, 0, message.storeValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.storeValue) : message.storeValue;
                            return object;
                        };

                        /**
                         * Converts this Entry to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Entry.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Entry
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Entry
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Entry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Entry";
                        };

                        return Entry;
                    })();

                    protocol.Header = (function() {

                        /**
                         * Properties of a Header.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IHeader
                         * @property {number|null} [version] Header version
                         * @property {string|null} [logfileName] binlog/redolog 文件名*
                         * @property {number|Long|null} [logfileOffset] binlog/redolog 文件的偏移位置*
                         * @property {number|Long|null} [serverId] 服务端serverId*
                         * @property {string|null} [serverenCode] 变更数据的编码 *
                         * @property {number|Long|null} [executeTime] 变更数据的执行时间 *
                         * @property {com.alibaba.otter.canal.protocol.Type|null} [sourceType] Header sourceType
                         * @property {string|null} [schemaName] 变更数据的schemaname*
                         * @property {string|null} [tableName] 变更数据的tablename*
                         * @property {number|Long|null} [eventLength] 每个event的长度*
                         * @property {com.alibaba.otter.canal.protocol.EventType|null} [eventType] Header eventType
                         * @property {Array.<com.alibaba.otter.canal.protocol.IPair>|null} [props] 预留扩展*
                         * @property {string|null} [gtid] 当前事务的gitd*
                         */

                        /**
                         * Constructs a new Header.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc message Header*
                         * @implements IHeader
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IHeader=} [properties] Properties to set
                         */
                        function Header(properties) {
                            this.props = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Header version.
                         * @member {number|null|undefined} version
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.version = null;

                        /**
                         * binlog/redolog 文件名*
                         * @member {string} logfileName
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.logfileName = "";

                        /**
                         * binlog/redolog 文件的偏移位置*
                         * @member {number|Long} logfileOffset
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.logfileOffset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * 服务端serverId*
                         * @member {number|Long} serverId
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.serverId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * 变更数据的编码 *
                         * @member {string} serverenCode
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.serverenCode = "";

                        /**
                         * 变更数据的执行时间 *
                         * @member {number|Long} executeTime
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.executeTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Header sourceType.
                         * @member {com.alibaba.otter.canal.protocol.Type|null|undefined} sourceType
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.sourceType = null;

                        /**
                         * 变更数据的schemaname*
                         * @member {string} schemaName
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.schemaName = "";

                        /**
                         * 变更数据的tablename*
                         * @member {string} tableName
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.tableName = "";

                        /**
                         * 每个event的长度*
                         * @member {number|Long} eventLength
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.eventLength = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Header eventType.
                         * @member {com.alibaba.otter.canal.protocol.EventType|null|undefined} eventType
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.eventType = null;

                        /**
                         * 预留扩展*
                         * @member {Array.<com.alibaba.otter.canal.protocol.IPair>} props
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.props = $util.emptyArray;

                        /**
                         * 当前事务的gitd*
                         * @member {string} gtid
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Header.prototype.gtid = "";

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * 协议的版本号*
                         * @member {"version"|undefined} versionPresent
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Object.defineProperty(Header.prototype, "versionPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["version"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * 变更数据的来源*
                         * @member {"sourceType"|undefined} sourceTypePresent
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Object.defineProperty(Header.prototype, "sourceTypePresent", {
                            get: $util.oneOfGetter($oneOfFields = ["sourceType"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * 数据变更类型*
                         * @member {"eventType"|undefined} eventTypePresent
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         */
                        Object.defineProperty(Header.prototype, "eventTypePresent", {
                            get: $util.oneOfGetter($oneOfFields = ["eventType"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Header instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IHeader=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Header} Header instance
                         */
                        Header.create = function create(properties) {
                            return new Header(properties);
                        };

                        /**
                         * Encodes the specified Header message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Header.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IHeader} message Header message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Header.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                            if (message.logfileName != null && Object.hasOwnProperty.call(message, "logfileName"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.logfileName);
                            if (message.logfileOffset != null && Object.hasOwnProperty.call(message, "logfileOffset"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.logfileOffset);
                            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.serverId);
                            if (message.serverenCode != null && Object.hasOwnProperty.call(message, "serverenCode"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.serverenCode);
                            if (message.executeTime != null && Object.hasOwnProperty.call(message, "executeTime"))
                                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.executeTime);
                            if (message.sourceType != null && Object.hasOwnProperty.call(message, "sourceType"))
                                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sourceType);
                            if (message.schemaName != null && Object.hasOwnProperty.call(message, "schemaName"))
                                writer.uint32(/* id 8, wireType 2 =*/66).string(message.schemaName);
                            if (message.tableName != null && Object.hasOwnProperty.call(message, "tableName"))
                                writer.uint32(/* id 9, wireType 2 =*/74).string(message.tableName);
                            if (message.eventLength != null && Object.hasOwnProperty.call(message, "eventLength"))
                                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.eventLength);
                            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.eventType);
                            if (message.props != null && message.props.length)
                                for (var i = 0; i < message.props.length; ++i)
                                    $root.com.alibaba.otter.canal.protocol.Pair.encode(message.props[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                            if (message.gtid != null && Object.hasOwnProperty.call(message, "gtid"))
                                writer.uint32(/* id 13, wireType 2 =*/106).string(message.gtid);
                            return writer;
                        };

                        /**
                         * Encodes the specified Header message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Header.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IHeader} message Header message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Header.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Header message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Header} Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Header.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Header();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.version = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.logfileName = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.logfileOffset = reader.int64();
                                        break;
                                    }
                                case 4: {
                                        message.serverId = reader.int64();
                                        break;
                                    }
                                case 5: {
                                        message.serverenCode = reader.string();
                                        break;
                                    }
                                case 6: {
                                        message.executeTime = reader.int64();
                                        break;
                                    }
                                case 7: {
                                        message.sourceType = reader.int32();
                                        break;
                                    }
                                case 8: {
                                        message.schemaName = reader.string();
                                        break;
                                    }
                                case 9: {
                                        message.tableName = reader.string();
                                        break;
                                    }
                                case 10: {
                                        message.eventLength = reader.int64();
                                        break;
                                    }
                                case 11: {
                                        message.eventType = reader.int32();
                                        break;
                                    }
                                case 12: {
                                        if (!(message.props && message.props.length))
                                            message.props = [];
                                        message.props.push($root.com.alibaba.otter.canal.protocol.Pair.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 13: {
                                        message.gtid = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Header message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Header} Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Header.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Header message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Header.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.version != null && message.hasOwnProperty("version")) {
                                properties.versionPresent = 1;
                                if (!$util.isInteger(message.version))
                                    return "version: integer expected";
                            }
                            if (message.logfileName != null && message.hasOwnProperty("logfileName"))
                                if (!$util.isString(message.logfileName))
                                    return "logfileName: string expected";
                            if (message.logfileOffset != null && message.hasOwnProperty("logfileOffset"))
                                if (!$util.isInteger(message.logfileOffset) && !(message.logfileOffset && $util.isInteger(message.logfileOffset.low) && $util.isInteger(message.logfileOffset.high)))
                                    return "logfileOffset: integer|Long expected";
                            if (message.serverId != null && message.hasOwnProperty("serverId"))
                                if (!$util.isInteger(message.serverId) && !(message.serverId && $util.isInteger(message.serverId.low) && $util.isInteger(message.serverId.high)))
                                    return "serverId: integer|Long expected";
                            if (message.serverenCode != null && message.hasOwnProperty("serverenCode"))
                                if (!$util.isString(message.serverenCode))
                                    return "serverenCode: string expected";
                            if (message.executeTime != null && message.hasOwnProperty("executeTime"))
                                if (!$util.isInteger(message.executeTime) && !(message.executeTime && $util.isInteger(message.executeTime.low) && $util.isInteger(message.executeTime.high)))
                                    return "executeTime: integer|Long expected";
                            if (message.sourceType != null && message.hasOwnProperty("sourceType")) {
                                properties.sourceTypePresent = 1;
                                switch (message.sourceType) {
                                default:
                                    return "sourceType: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    break;
                                }
                            }
                            if (message.schemaName != null && message.hasOwnProperty("schemaName"))
                                if (!$util.isString(message.schemaName))
                                    return "schemaName: string expected";
                            if (message.tableName != null && message.hasOwnProperty("tableName"))
                                if (!$util.isString(message.tableName))
                                    return "tableName: string expected";
                            if (message.eventLength != null && message.hasOwnProperty("eventLength"))
                                if (!$util.isInteger(message.eventLength) && !(message.eventLength && $util.isInteger(message.eventLength.low) && $util.isInteger(message.eventLength.high)))
                                    return "eventLength: integer|Long expected";
                            if (message.eventType != null && message.hasOwnProperty("eventType")) {
                                properties.eventTypePresent = 1;
                                switch (message.eventType) {
                                default:
                                    return "eventType: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                case 13:
                                case 14:
                                case 15:
                                    break;
                                }
                            }
                            if (message.props != null && message.hasOwnProperty("props")) {
                                if (!Array.isArray(message.props))
                                    return "props: array expected";
                                for (var i = 0; i < message.props.length; ++i) {
                                    var error = $root.com.alibaba.otter.canal.protocol.Pair.verify(message.props[i]);
                                    if (error)
                                        return "props." + error;
                                }
                            }
                            if (message.gtid != null && message.hasOwnProperty("gtid"))
                                if (!$util.isString(message.gtid))
                                    return "gtid: string expected";
                            return null;
                        };

                        /**
                         * Creates a Header message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Header} Header
                         */
                        Header.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Header)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Header();
                            if (object.version != null)
                                message.version = object.version | 0;
                            if (object.logfileName != null)
                                message.logfileName = String(object.logfileName);
                            if (object.logfileOffset != null)
                                if ($util.Long)
                                    (message.logfileOffset = $util.Long.fromValue(object.logfileOffset)).unsigned = false;
                                else if (typeof object.logfileOffset === "string")
                                    message.logfileOffset = parseInt(object.logfileOffset, 10);
                                else if (typeof object.logfileOffset === "number")
                                    message.logfileOffset = object.logfileOffset;
                                else if (typeof object.logfileOffset === "object")
                                    message.logfileOffset = new $util.LongBits(object.logfileOffset.low >>> 0, object.logfileOffset.high >>> 0).toNumber();
                            if (object.serverId != null)
                                if ($util.Long)
                                    (message.serverId = $util.Long.fromValue(object.serverId)).unsigned = false;
                                else if (typeof object.serverId === "string")
                                    message.serverId = parseInt(object.serverId, 10);
                                else if (typeof object.serverId === "number")
                                    message.serverId = object.serverId;
                                else if (typeof object.serverId === "object")
                                    message.serverId = new $util.LongBits(object.serverId.low >>> 0, object.serverId.high >>> 0).toNumber();
                            if (object.serverenCode != null)
                                message.serverenCode = String(object.serverenCode);
                            if (object.executeTime != null)
                                if ($util.Long)
                                    (message.executeTime = $util.Long.fromValue(object.executeTime)).unsigned = false;
                                else if (typeof object.executeTime === "string")
                                    message.executeTime = parseInt(object.executeTime, 10);
                                else if (typeof object.executeTime === "number")
                                    message.executeTime = object.executeTime;
                                else if (typeof object.executeTime === "object")
                                    message.executeTime = new $util.LongBits(object.executeTime.low >>> 0, object.executeTime.high >>> 0).toNumber();
                            switch (object.sourceType) {
                            default:
                                if (typeof object.sourceType === "number") {
                                    message.sourceType = object.sourceType;
                                    break;
                                }
                                break;
                            case "TYPECOMPATIBLEPROTO2":
                            case 0:
                                message.sourceType = 0;
                                break;
                            case "ORACLE":
                            case 1:
                                message.sourceType = 1;
                                break;
                            case "MYSQL":
                            case 2:
                                message.sourceType = 2;
                                break;
                            case "PGSQL":
                            case 3:
                                message.sourceType = 3;
                                break;
                            }
                            if (object.schemaName != null)
                                message.schemaName = String(object.schemaName);
                            if (object.tableName != null)
                                message.tableName = String(object.tableName);
                            if (object.eventLength != null)
                                if ($util.Long)
                                    (message.eventLength = $util.Long.fromValue(object.eventLength)).unsigned = false;
                                else if (typeof object.eventLength === "string")
                                    message.eventLength = parseInt(object.eventLength, 10);
                                else if (typeof object.eventLength === "number")
                                    message.eventLength = object.eventLength;
                                else if (typeof object.eventLength === "object")
                                    message.eventLength = new $util.LongBits(object.eventLength.low >>> 0, object.eventLength.high >>> 0).toNumber();
                            switch (object.eventType) {
                            default:
                                if (typeof object.eventType === "number") {
                                    message.eventType = object.eventType;
                                    break;
                                }
                                break;
                            case "EVENTTYPECOMPATIBLEPROTO2":
                            case 0:
                                message.eventType = 0;
                                break;
                            case "INSERT":
                            case 1:
                                message.eventType = 1;
                                break;
                            case "UPDATE":
                            case 2:
                                message.eventType = 2;
                                break;
                            case "DELETE":
                            case 3:
                                message.eventType = 3;
                                break;
                            case "CREATE":
                            case 4:
                                message.eventType = 4;
                                break;
                            case "ALTER":
                            case 5:
                                message.eventType = 5;
                                break;
                            case "ERASE":
                            case 6:
                                message.eventType = 6;
                                break;
                            case "QUERY":
                            case 7:
                                message.eventType = 7;
                                break;
                            case "TRUNCATE":
                            case 8:
                                message.eventType = 8;
                                break;
                            case "RENAME":
                            case 9:
                                message.eventType = 9;
                                break;
                            case "CINDEX":
                            case 10:
                                message.eventType = 10;
                                break;
                            case "DINDEX":
                            case 11:
                                message.eventType = 11;
                                break;
                            case "GTID":
                            case 12:
                                message.eventType = 12;
                                break;
                            case "XACOMMIT":
                            case 13:
                                message.eventType = 13;
                                break;
                            case "XAROLLBACK":
                            case 14:
                                message.eventType = 14;
                                break;
                            case "MHEARTBEAT":
                            case 15:
                                message.eventType = 15;
                                break;
                            }
                            if (object.props) {
                                if (!Array.isArray(object.props))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.Header.props: array expected");
                                message.props = [];
                                for (var i = 0; i < object.props.length; ++i) {
                                    if (typeof object.props[i] !== "object")
                                        throw TypeError(".com.alibaba.otter.canal.protocol.Header.props: object expected");
                                    message.props[i] = $root.com.alibaba.otter.canal.protocol.Pair.fromObject(object.props[i]);
                                }
                            }
                            if (object.gtid != null)
                                message.gtid = String(object.gtid);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Header message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Header} message Header
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Header.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.props = [];
                            if (options.defaults) {
                                object.logfileName = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.logfileOffset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.logfileOffset = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.serverId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.serverId = options.longs === String ? "0" : 0;
                                object.serverenCode = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.executeTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.executeTime = options.longs === String ? "0" : 0;
                                object.schemaName = "";
                                object.tableName = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.eventLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.eventLength = options.longs === String ? "0" : 0;
                                object.gtid = "";
                            }
                            if (message.version != null && message.hasOwnProperty("version")) {
                                object.version = message.version;
                                if (options.oneofs)
                                    object.versionPresent = "version";
                            }
                            if (message.logfileName != null && message.hasOwnProperty("logfileName"))
                                object.logfileName = message.logfileName;
                            if (message.logfileOffset != null && message.hasOwnProperty("logfileOffset"))
                                if (typeof message.logfileOffset === "number")
                                    object.logfileOffset = options.longs === String ? String(message.logfileOffset) : message.logfileOffset;
                                else
                                    object.logfileOffset = options.longs === String ? $util.Long.prototype.toString.call(message.logfileOffset) : options.longs === Number ? new $util.LongBits(message.logfileOffset.low >>> 0, message.logfileOffset.high >>> 0).toNumber() : message.logfileOffset;
                            if (message.serverId != null && message.hasOwnProperty("serverId"))
                                if (typeof message.serverId === "number")
                                    object.serverId = options.longs === String ? String(message.serverId) : message.serverId;
                                else
                                    object.serverId = options.longs === String ? $util.Long.prototype.toString.call(message.serverId) : options.longs === Number ? new $util.LongBits(message.serverId.low >>> 0, message.serverId.high >>> 0).toNumber() : message.serverId;
                            if (message.serverenCode != null && message.hasOwnProperty("serverenCode"))
                                object.serverenCode = message.serverenCode;
                            if (message.executeTime != null && message.hasOwnProperty("executeTime"))
                                if (typeof message.executeTime === "number")
                                    object.executeTime = options.longs === String ? String(message.executeTime) : message.executeTime;
                                else
                                    object.executeTime = options.longs === String ? $util.Long.prototype.toString.call(message.executeTime) : options.longs === Number ? new $util.LongBits(message.executeTime.low >>> 0, message.executeTime.high >>> 0).toNumber() : message.executeTime;
                            if (message.sourceType != null && message.hasOwnProperty("sourceType")) {
                                object.sourceType = options.enums === String ? $root.com.alibaba.otter.canal.protocol.Type[message.sourceType] === undefined ? message.sourceType : $root.com.alibaba.otter.canal.protocol.Type[message.sourceType] : message.sourceType;
                                if (options.oneofs)
                                    object.sourceTypePresent = "sourceType";
                            }
                            if (message.schemaName != null && message.hasOwnProperty("schemaName"))
                                object.schemaName = message.schemaName;
                            if (message.tableName != null && message.hasOwnProperty("tableName"))
                                object.tableName = message.tableName;
                            if (message.eventLength != null && message.hasOwnProperty("eventLength"))
                                if (typeof message.eventLength === "number")
                                    object.eventLength = options.longs === String ? String(message.eventLength) : message.eventLength;
                                else
                                    object.eventLength = options.longs === String ? $util.Long.prototype.toString.call(message.eventLength) : options.longs === Number ? new $util.LongBits(message.eventLength.low >>> 0, message.eventLength.high >>> 0).toNumber() : message.eventLength;
                            if (message.eventType != null && message.hasOwnProperty("eventType")) {
                                object.eventType = options.enums === String ? $root.com.alibaba.otter.canal.protocol.EventType[message.eventType] === undefined ? message.eventType : $root.com.alibaba.otter.canal.protocol.EventType[message.eventType] : message.eventType;
                                if (options.oneofs)
                                    object.eventTypePresent = "eventType";
                            }
                            if (message.props && message.props.length) {
                                object.props = [];
                                for (var j = 0; j < message.props.length; ++j)
                                    object.props[j] = $root.com.alibaba.otter.canal.protocol.Pair.toObject(message.props[j], options);
                            }
                            if (message.gtid != null && message.hasOwnProperty("gtid"))
                                object.gtid = message.gtid;
                            return object;
                        };

                        /**
                         * Converts this Header to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Header.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Header
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Header
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Header";
                        };

                        return Header;
                    })();

                    protocol.Column = (function() {

                        /**
                         * Properties of a Column.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IColumn
                         * @property {number|null} [index] 字段下标*
                         * @property {number|null} [sqlType] 字段java中类型*
                         * @property {string|null} [name] 字段名称(忽略大小写)，在mysql中是没有的*
                         * @property {boolean|null} [isKey] 是否是主键*
                         * @property {boolean|null} [updated] 如果EventType=UPDATE,用于标识这个字段值是否有修改*
                         * @property {boolean|null} [isNull] Column isNull
                         * @property {Array.<com.alibaba.otter.canal.protocol.IPair>|null} [props] 预留扩展*
                         * @property {string|null} [value] 字段值,timestamp,Datetime是一个时间格式的文本 *
                         * @property {number|null} [length] 对应数据对象原始长度 *
                         * @property {string|null} [mysqlType] 字段mysql类型*
                         */

                        /**
                         * Constructs a new Column.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc 每个字段的数据结构*
                         * @implements IColumn
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IColumn=} [properties] Properties to set
                         */
                        function Column(properties) {
                            this.props = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * 字段下标*
                         * @member {number} index
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.index = 0;

                        /**
                         * 字段java中类型*
                         * @member {number} sqlType
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.sqlType = 0;

                        /**
                         * 字段名称(忽略大小写)，在mysql中是没有的*
                         * @member {string} name
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.name = "";

                        /**
                         * 是否是主键*
                         * @member {boolean} isKey
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.isKey = false;

                        /**
                         * 如果EventType=UPDATE,用于标识这个字段值是否有修改*
                         * @member {boolean} updated
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.updated = false;

                        /**
                         * Column isNull.
                         * @member {boolean|null|undefined} isNull
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.isNull = null;

                        /**
                         * 预留扩展*
                         * @member {Array.<com.alibaba.otter.canal.protocol.IPair>} props
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.props = $util.emptyArray;

                        /**
                         * 字段值,timestamp,Datetime是一个时间格式的文本 *
                         * @member {string} value
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.value = "";

                        /**
                         * 对应数据对象原始长度 *
                         * @member {number} length
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.length = 0;

                        /**
                         * 字段mysql类型*
                         * @member {string} mysqlType
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Column.prototype.mysqlType = "";

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * 标识是否为空  *
                         * @member {"isNull"|undefined} isNullPresent
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         */
                        Object.defineProperty(Column.prototype, "isNullPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["isNull"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new Column instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IColumn=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Column} Column instance
                         */
                        Column.create = function create(properties) {
                            return new Column(properties);
                        };

                        /**
                         * Encodes the specified Column message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Column.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IColumn} message Column message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Column.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
                            if (message.sqlType != null && Object.hasOwnProperty.call(message, "sqlType"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sqlType);
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                            if (message.isKey != null && Object.hasOwnProperty.call(message, "isKey"))
                                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isKey);
                            if (message.updated != null && Object.hasOwnProperty.call(message, "updated"))
                                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.updated);
                            if (message.isNull != null && Object.hasOwnProperty.call(message, "isNull"))
                                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isNull);
                            if (message.props != null && message.props.length)
                                for (var i = 0; i < message.props.length; ++i)
                                    $root.com.alibaba.otter.canal.protocol.Pair.encode(message.props[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                                writer.uint32(/* id 8, wireType 2 =*/66).string(message.value);
                            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.length);
                            if (message.mysqlType != null && Object.hasOwnProperty.call(message, "mysqlType"))
                                writer.uint32(/* id 10, wireType 2 =*/82).string(message.mysqlType);
                            return writer;
                        };

                        /**
                         * Encodes the specified Column message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Column.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IColumn} message Column message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Column.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Column message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Column} Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Column.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Column();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.index = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.sqlType = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.isKey = reader.bool();
                                        break;
                                    }
                                case 5: {
                                        message.updated = reader.bool();
                                        break;
                                    }
                                case 6: {
                                        message.isNull = reader.bool();
                                        break;
                                    }
                                case 7: {
                                        if (!(message.props && message.props.length))
                                            message.props = [];
                                        message.props.push($root.com.alibaba.otter.canal.protocol.Pair.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 8: {
                                        message.value = reader.string();
                                        break;
                                    }
                                case 9: {
                                        message.length = reader.int32();
                                        break;
                                    }
                                case 10: {
                                        message.mysqlType = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Column message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Column} Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Column.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Column message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Column.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.index != null && message.hasOwnProperty("index"))
                                if (!$util.isInteger(message.index))
                                    return "index: integer expected";
                            if (message.sqlType != null && message.hasOwnProperty("sqlType"))
                                if (!$util.isInteger(message.sqlType))
                                    return "sqlType: integer expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.isKey != null && message.hasOwnProperty("isKey"))
                                if (typeof message.isKey !== "boolean")
                                    return "isKey: boolean expected";
                            if (message.updated != null && message.hasOwnProperty("updated"))
                                if (typeof message.updated !== "boolean")
                                    return "updated: boolean expected";
                            if (message.isNull != null && message.hasOwnProperty("isNull")) {
                                properties.isNullPresent = 1;
                                if (typeof message.isNull !== "boolean")
                                    return "isNull: boolean expected";
                            }
                            if (message.props != null && message.hasOwnProperty("props")) {
                                if (!Array.isArray(message.props))
                                    return "props: array expected";
                                for (var i = 0; i < message.props.length; ++i) {
                                    var error = $root.com.alibaba.otter.canal.protocol.Pair.verify(message.props[i]);
                                    if (error)
                                        return "props." + error;
                                }
                            }
                            if (message.value != null && message.hasOwnProperty("value"))
                                if (!$util.isString(message.value))
                                    return "value: string expected";
                            if (message.length != null && message.hasOwnProperty("length"))
                                if (!$util.isInteger(message.length))
                                    return "length: integer expected";
                            if (message.mysqlType != null && message.hasOwnProperty("mysqlType"))
                                if (!$util.isString(message.mysqlType))
                                    return "mysqlType: string expected";
                            return null;
                        };

                        /**
                         * Creates a Column message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Column} Column
                         */
                        Column.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Column)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Column();
                            if (object.index != null)
                                message.index = object.index | 0;
                            if (object.sqlType != null)
                                message.sqlType = object.sqlType | 0;
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.isKey != null)
                                message.isKey = Boolean(object.isKey);
                            if (object.updated != null)
                                message.updated = Boolean(object.updated);
                            if (object.isNull != null)
                                message.isNull = Boolean(object.isNull);
                            if (object.props) {
                                if (!Array.isArray(object.props))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.Column.props: array expected");
                                message.props = [];
                                for (var i = 0; i < object.props.length; ++i) {
                                    if (typeof object.props[i] !== "object")
                                        throw TypeError(".com.alibaba.otter.canal.protocol.Column.props: object expected");
                                    message.props[i] = $root.com.alibaba.otter.canal.protocol.Pair.fromObject(object.props[i]);
                                }
                            }
                            if (object.value != null)
                                message.value = String(object.value);
                            if (object.length != null)
                                message.length = object.length | 0;
                            if (object.mysqlType != null)
                                message.mysqlType = String(object.mysqlType);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Column message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Column} message Column
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Column.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.props = [];
                            if (options.defaults) {
                                object.index = 0;
                                object.sqlType = 0;
                                object.name = "";
                                object.isKey = false;
                                object.updated = false;
                                object.value = "";
                                object.length = 0;
                                object.mysqlType = "";
                            }
                            if (message.index != null && message.hasOwnProperty("index"))
                                object.index = message.index;
                            if (message.sqlType != null && message.hasOwnProperty("sqlType"))
                                object.sqlType = message.sqlType;
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.isKey != null && message.hasOwnProperty("isKey"))
                                object.isKey = message.isKey;
                            if (message.updated != null && message.hasOwnProperty("updated"))
                                object.updated = message.updated;
                            if (message.isNull != null && message.hasOwnProperty("isNull")) {
                                object.isNull = message.isNull;
                                if (options.oneofs)
                                    object.isNullPresent = "isNull";
                            }
                            if (message.props && message.props.length) {
                                object.props = [];
                                for (var j = 0; j < message.props.length; ++j)
                                    object.props[j] = $root.com.alibaba.otter.canal.protocol.Pair.toObject(message.props[j], options);
                            }
                            if (message.value != null && message.hasOwnProperty("value"))
                                object.value = message.value;
                            if (message.length != null && message.hasOwnProperty("length"))
                                object.length = message.length;
                            if (message.mysqlType != null && message.hasOwnProperty("mysqlType"))
                                object.mysqlType = message.mysqlType;
                            return object;
                        };

                        /**
                         * Converts this Column to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Column.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Column
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Column
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Column.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Column";
                        };

                        return Column;
                    })();

                    protocol.RowData = (function() {

                        /**
                         * Properties of a RowData.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IRowData
                         * @property {Array.<com.alibaba.otter.canal.protocol.IColumn>|null} [beforeColumns] 字段信息，增量数据(修改前,删除前) *
                         * @property {Array.<com.alibaba.otter.canal.protocol.IColumn>|null} [afterColumns] 字段信息，增量数据(修改后,新增后)  *
                         * @property {Array.<com.alibaba.otter.canal.protocol.IPair>|null} [props] 预留扩展*
                         */

                        /**
                         * Constructs a new RowData.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc Represents a RowData.
                         * @implements IRowData
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IRowData=} [properties] Properties to set
                         */
                        function RowData(properties) {
                            this.beforeColumns = [];
                            this.afterColumns = [];
                            this.props = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * 字段信息，增量数据(修改前,删除前) *
                         * @member {Array.<com.alibaba.otter.canal.protocol.IColumn>} beforeColumns
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @instance
                         */
                        RowData.prototype.beforeColumns = $util.emptyArray;

                        /**
                         * 字段信息，增量数据(修改后,新增后)  *
                         * @member {Array.<com.alibaba.otter.canal.protocol.IColumn>} afterColumns
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @instance
                         */
                        RowData.prototype.afterColumns = $util.emptyArray;

                        /**
                         * 预留扩展*
                         * @member {Array.<com.alibaba.otter.canal.protocol.IPair>} props
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @instance
                         */
                        RowData.prototype.props = $util.emptyArray;

                        /**
                         * Creates a new RowData instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IRowData=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.RowData} RowData instance
                         */
                        RowData.create = function create(properties) {
                            return new RowData(properties);
                        };

                        /**
                         * Encodes the specified RowData message. Does not implicitly {@link com.alibaba.otter.canal.protocol.RowData.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IRowData} message RowData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RowData.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.beforeColumns != null && message.beforeColumns.length)
                                for (var i = 0; i < message.beforeColumns.length; ++i)
                                    $root.com.alibaba.otter.canal.protocol.Column.encode(message.beforeColumns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.afterColumns != null && message.afterColumns.length)
                                for (var i = 0; i < message.afterColumns.length; ++i)
                                    $root.com.alibaba.otter.canal.protocol.Column.encode(message.afterColumns[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.props != null && message.props.length)
                                for (var i = 0; i < message.props.length; ++i)
                                    $root.com.alibaba.otter.canal.protocol.Pair.encode(message.props[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified RowData message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.RowData.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IRowData} message RowData message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RowData.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a RowData message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.RowData} RowData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RowData.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.RowData();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.beforeColumns && message.beforeColumns.length))
                                            message.beforeColumns = [];
                                        message.beforeColumns.push($root.com.alibaba.otter.canal.protocol.Column.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 2: {
                                        if (!(message.afterColumns && message.afterColumns.length))
                                            message.afterColumns = [];
                                        message.afterColumns.push($root.com.alibaba.otter.canal.protocol.Column.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 3: {
                                        if (!(message.props && message.props.length))
                                            message.props = [];
                                        message.props.push($root.com.alibaba.otter.canal.protocol.Pair.decode(reader, reader.uint32()));
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a RowData message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.RowData} RowData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RowData.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a RowData message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        RowData.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.beforeColumns != null && message.hasOwnProperty("beforeColumns")) {
                                if (!Array.isArray(message.beforeColumns))
                                    return "beforeColumns: array expected";
                                for (var i = 0; i < message.beforeColumns.length; ++i) {
                                    var error = $root.com.alibaba.otter.canal.protocol.Column.verify(message.beforeColumns[i]);
                                    if (error)
                                        return "beforeColumns." + error;
                                }
                            }
                            if (message.afterColumns != null && message.hasOwnProperty("afterColumns")) {
                                if (!Array.isArray(message.afterColumns))
                                    return "afterColumns: array expected";
                                for (var i = 0; i < message.afterColumns.length; ++i) {
                                    var error = $root.com.alibaba.otter.canal.protocol.Column.verify(message.afterColumns[i]);
                                    if (error)
                                        return "afterColumns." + error;
                                }
                            }
                            if (message.props != null && message.hasOwnProperty("props")) {
                                if (!Array.isArray(message.props))
                                    return "props: array expected";
                                for (var i = 0; i < message.props.length; ++i) {
                                    var error = $root.com.alibaba.otter.canal.protocol.Pair.verify(message.props[i]);
                                    if (error)
                                        return "props." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a RowData message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.RowData} RowData
                         */
                        RowData.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.RowData)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.RowData();
                            if (object.beforeColumns) {
                                if (!Array.isArray(object.beforeColumns))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.RowData.beforeColumns: array expected");
                                message.beforeColumns = [];
                                for (var i = 0; i < object.beforeColumns.length; ++i) {
                                    if (typeof object.beforeColumns[i] !== "object")
                                        throw TypeError(".com.alibaba.otter.canal.protocol.RowData.beforeColumns: object expected");
                                    message.beforeColumns[i] = $root.com.alibaba.otter.canal.protocol.Column.fromObject(object.beforeColumns[i]);
                                }
                            }
                            if (object.afterColumns) {
                                if (!Array.isArray(object.afterColumns))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.RowData.afterColumns: array expected");
                                message.afterColumns = [];
                                for (var i = 0; i < object.afterColumns.length; ++i) {
                                    if (typeof object.afterColumns[i] !== "object")
                                        throw TypeError(".com.alibaba.otter.canal.protocol.RowData.afterColumns: object expected");
                                    message.afterColumns[i] = $root.com.alibaba.otter.canal.protocol.Column.fromObject(object.afterColumns[i]);
                                }
                            }
                            if (object.props) {
                                if (!Array.isArray(object.props))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.RowData.props: array expected");
                                message.props = [];
                                for (var i = 0; i < object.props.length; ++i) {
                                    if (typeof object.props[i] !== "object")
                                        throw TypeError(".com.alibaba.otter.canal.protocol.RowData.props: object expected");
                                    message.props[i] = $root.com.alibaba.otter.canal.protocol.Pair.fromObject(object.props[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a RowData message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.RowData} message RowData
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        RowData.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.beforeColumns = [];
                                object.afterColumns = [];
                                object.props = [];
                            }
                            if (message.beforeColumns && message.beforeColumns.length) {
                                object.beforeColumns = [];
                                for (var j = 0; j < message.beforeColumns.length; ++j)
                                    object.beforeColumns[j] = $root.com.alibaba.otter.canal.protocol.Column.toObject(message.beforeColumns[j], options);
                            }
                            if (message.afterColumns && message.afterColumns.length) {
                                object.afterColumns = [];
                                for (var j = 0; j < message.afterColumns.length; ++j)
                                    object.afterColumns[j] = $root.com.alibaba.otter.canal.protocol.Column.toObject(message.afterColumns[j], options);
                            }
                            if (message.props && message.props.length) {
                                object.props = [];
                                for (var j = 0; j < message.props.length; ++j)
                                    object.props[j] = $root.com.alibaba.otter.canal.protocol.Pair.toObject(message.props[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this RowData to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        RowData.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for RowData
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.RowData
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        RowData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.RowData";
                        };

                        return RowData;
                    })();

                    protocol.RowChange = (function() {

                        /**
                         * Properties of a RowChange.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IRowChange
                         * @property {number|Long|null} [tableId] tableId,由数据库产生*
                         * @property {com.alibaba.otter.canal.protocol.EventType|null} [eventType] RowChange eventType
                         * @property {boolean|null} [isDdl] RowChange isDdl
                         * @property {string|null} [sql] ddl/query的sql语句  *
                         * @property {Array.<com.alibaba.otter.canal.protocol.IRowData>|null} [rowDatas] 一次数据库变更可能存在多行  *
                         * @property {Array.<com.alibaba.otter.canal.protocol.IPair>|null} [props] 预留扩展*
                         * @property {string|null} [ddlSchemaName] ddl/query的schemaName，会存在跨库ddl，需要保留执行ddl的当前schemaName  *
                         */

                        /**
                         * Constructs a new RowChange.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc message row 每行变更数据的数据结构*
                         * @implements IRowChange
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IRowChange=} [properties] Properties to set
                         */
                        function RowChange(properties) {
                            this.rowDatas = [];
                            this.props = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * tableId,由数据库产生*
                         * @member {number|Long} tableId
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         */
                        RowChange.prototype.tableId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * RowChange eventType.
                         * @member {com.alibaba.otter.canal.protocol.EventType|null|undefined} eventType
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         */
                        RowChange.prototype.eventType = null;

                        /**
                         * RowChange isDdl.
                         * @member {boolean|null|undefined} isDdl
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         */
                        RowChange.prototype.isDdl = null;

                        /**
                         * ddl/query的sql语句  *
                         * @member {string} sql
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         */
                        RowChange.prototype.sql = "";

                        /**
                         * 一次数据库变更可能存在多行  *
                         * @member {Array.<com.alibaba.otter.canal.protocol.IRowData>} rowDatas
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         */
                        RowChange.prototype.rowDatas = $util.emptyArray;

                        /**
                         * 预留扩展*
                         * @member {Array.<com.alibaba.otter.canal.protocol.IPair>} props
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         */
                        RowChange.prototype.props = $util.emptyArray;

                        /**
                         * ddl/query的schemaName，会存在跨库ddl，需要保留执行ddl的当前schemaName  *
                         * @member {string} ddlSchemaName
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         */
                        RowChange.prototype.ddlSchemaName = "";

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * 数据变更类型*
                         * @member {"eventType"|undefined} eventTypePresent
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         */
                        Object.defineProperty(RowChange.prototype, "eventTypePresent", {
                            get: $util.oneOfGetter($oneOfFields = ["eventType"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * 标识是否是ddl语句  *
                         * @member {"isDdl"|undefined} isDdlPresent
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         */
                        Object.defineProperty(RowChange.prototype, "isDdlPresent", {
                            get: $util.oneOfGetter($oneOfFields = ["isDdl"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new RowChange instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IRowChange=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.RowChange} RowChange instance
                         */
                        RowChange.create = function create(properties) {
                            return new RowChange(properties);
                        };

                        /**
                         * Encodes the specified RowChange message. Does not implicitly {@link com.alibaba.otter.canal.protocol.RowChange.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IRowChange} message RowChange message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RowChange.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.tableId != null && Object.hasOwnProperty.call(message, "tableId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.tableId);
                            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.eventType);
                            if (message.isDdl != null && Object.hasOwnProperty.call(message, "isDdl"))
                                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isDdl);
                            if (message.sql != null && Object.hasOwnProperty.call(message, "sql"))
                                writer.uint32(/* id 11, wireType 2 =*/90).string(message.sql);
                            if (message.rowDatas != null && message.rowDatas.length)
                                for (var i = 0; i < message.rowDatas.length; ++i)
                                    $root.com.alibaba.otter.canal.protocol.RowData.encode(message.rowDatas[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                            if (message.props != null && message.props.length)
                                for (var i = 0; i < message.props.length; ++i)
                                    $root.com.alibaba.otter.canal.protocol.Pair.encode(message.props[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                            if (message.ddlSchemaName != null && Object.hasOwnProperty.call(message, "ddlSchemaName"))
                                writer.uint32(/* id 14, wireType 2 =*/114).string(message.ddlSchemaName);
                            return writer;
                        };

                        /**
                         * Encodes the specified RowChange message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.RowChange.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IRowChange} message RowChange message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RowChange.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a RowChange message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.RowChange} RowChange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RowChange.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.RowChange();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.tableId = reader.int64();
                                        break;
                                    }
                                case 2: {
                                        message.eventType = reader.int32();
                                        break;
                                    }
                                case 10: {
                                        message.isDdl = reader.bool();
                                        break;
                                    }
                                case 11: {
                                        message.sql = reader.string();
                                        break;
                                    }
                                case 12: {
                                        if (!(message.rowDatas && message.rowDatas.length))
                                            message.rowDatas = [];
                                        message.rowDatas.push($root.com.alibaba.otter.canal.protocol.RowData.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 13: {
                                        if (!(message.props && message.props.length))
                                            message.props = [];
                                        message.props.push($root.com.alibaba.otter.canal.protocol.Pair.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 14: {
                                        message.ddlSchemaName = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a RowChange message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.RowChange} RowChange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RowChange.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a RowChange message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        RowChange.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.tableId != null && message.hasOwnProperty("tableId"))
                                if (!$util.isInteger(message.tableId) && !(message.tableId && $util.isInteger(message.tableId.low) && $util.isInteger(message.tableId.high)))
                                    return "tableId: integer|Long expected";
                            if (message.eventType != null && message.hasOwnProperty("eventType")) {
                                properties.eventTypePresent = 1;
                                switch (message.eventType) {
                                default:
                                    return "eventType: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                case 13:
                                case 14:
                                case 15:
                                    break;
                                }
                            }
                            if (message.isDdl != null && message.hasOwnProperty("isDdl")) {
                                properties.isDdlPresent = 1;
                                if (typeof message.isDdl !== "boolean")
                                    return "isDdl: boolean expected";
                            }
                            if (message.sql != null && message.hasOwnProperty("sql"))
                                if (!$util.isString(message.sql))
                                    return "sql: string expected";
                            if (message.rowDatas != null && message.hasOwnProperty("rowDatas")) {
                                if (!Array.isArray(message.rowDatas))
                                    return "rowDatas: array expected";
                                for (var i = 0; i < message.rowDatas.length; ++i) {
                                    var error = $root.com.alibaba.otter.canal.protocol.RowData.verify(message.rowDatas[i]);
                                    if (error)
                                        return "rowDatas." + error;
                                }
                            }
                            if (message.props != null && message.hasOwnProperty("props")) {
                                if (!Array.isArray(message.props))
                                    return "props: array expected";
                                for (var i = 0; i < message.props.length; ++i) {
                                    var error = $root.com.alibaba.otter.canal.protocol.Pair.verify(message.props[i]);
                                    if (error)
                                        return "props." + error;
                                }
                            }
                            if (message.ddlSchemaName != null && message.hasOwnProperty("ddlSchemaName"))
                                if (!$util.isString(message.ddlSchemaName))
                                    return "ddlSchemaName: string expected";
                            return null;
                        };

                        /**
                         * Creates a RowChange message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.RowChange} RowChange
                         */
                        RowChange.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.RowChange)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.RowChange();
                            if (object.tableId != null)
                                if ($util.Long)
                                    (message.tableId = $util.Long.fromValue(object.tableId)).unsigned = false;
                                else if (typeof object.tableId === "string")
                                    message.tableId = parseInt(object.tableId, 10);
                                else if (typeof object.tableId === "number")
                                    message.tableId = object.tableId;
                                else if (typeof object.tableId === "object")
                                    message.tableId = new $util.LongBits(object.tableId.low >>> 0, object.tableId.high >>> 0).toNumber();
                            switch (object.eventType) {
                            default:
                                if (typeof object.eventType === "number") {
                                    message.eventType = object.eventType;
                                    break;
                                }
                                break;
                            case "EVENTTYPECOMPATIBLEPROTO2":
                            case 0:
                                message.eventType = 0;
                                break;
                            case "INSERT":
                            case 1:
                                message.eventType = 1;
                                break;
                            case "UPDATE":
                            case 2:
                                message.eventType = 2;
                                break;
                            case "DELETE":
                            case 3:
                                message.eventType = 3;
                                break;
                            case "CREATE":
                            case 4:
                                message.eventType = 4;
                                break;
                            case "ALTER":
                            case 5:
                                message.eventType = 5;
                                break;
                            case "ERASE":
                            case 6:
                                message.eventType = 6;
                                break;
                            case "QUERY":
                            case 7:
                                message.eventType = 7;
                                break;
                            case "TRUNCATE":
                            case 8:
                                message.eventType = 8;
                                break;
                            case "RENAME":
                            case 9:
                                message.eventType = 9;
                                break;
                            case "CINDEX":
                            case 10:
                                message.eventType = 10;
                                break;
                            case "DINDEX":
                            case 11:
                                message.eventType = 11;
                                break;
                            case "GTID":
                            case 12:
                                message.eventType = 12;
                                break;
                            case "XACOMMIT":
                            case 13:
                                message.eventType = 13;
                                break;
                            case "XAROLLBACK":
                            case 14:
                                message.eventType = 14;
                                break;
                            case "MHEARTBEAT":
                            case 15:
                                message.eventType = 15;
                                break;
                            }
                            if (object.isDdl != null)
                                message.isDdl = Boolean(object.isDdl);
                            if (object.sql != null)
                                message.sql = String(object.sql);
                            if (object.rowDatas) {
                                if (!Array.isArray(object.rowDatas))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.RowChange.rowDatas: array expected");
                                message.rowDatas = [];
                                for (var i = 0; i < object.rowDatas.length; ++i) {
                                    if (typeof object.rowDatas[i] !== "object")
                                        throw TypeError(".com.alibaba.otter.canal.protocol.RowChange.rowDatas: object expected");
                                    message.rowDatas[i] = $root.com.alibaba.otter.canal.protocol.RowData.fromObject(object.rowDatas[i]);
                                }
                            }
                            if (object.props) {
                                if (!Array.isArray(object.props))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.RowChange.props: array expected");
                                message.props = [];
                                for (var i = 0; i < object.props.length; ++i) {
                                    if (typeof object.props[i] !== "object")
                                        throw TypeError(".com.alibaba.otter.canal.protocol.RowChange.props: object expected");
                                    message.props[i] = $root.com.alibaba.otter.canal.protocol.Pair.fromObject(object.props[i]);
                                }
                            }
                            if (object.ddlSchemaName != null)
                                message.ddlSchemaName = String(object.ddlSchemaName);
                            return message;
                        };

                        /**
                         * Creates a plain object from a RowChange message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.RowChange} message RowChange
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        RowChange.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.rowDatas = [];
                                object.props = [];
                            }
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.tableId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.tableId = options.longs === String ? "0" : 0;
                                object.sql = "";
                                object.ddlSchemaName = "";
                            }
                            if (message.tableId != null && message.hasOwnProperty("tableId"))
                                if (typeof message.tableId === "number")
                                    object.tableId = options.longs === String ? String(message.tableId) : message.tableId;
                                else
                                    object.tableId = options.longs === String ? $util.Long.prototype.toString.call(message.tableId) : options.longs === Number ? new $util.LongBits(message.tableId.low >>> 0, message.tableId.high >>> 0).toNumber() : message.tableId;
                            if (message.eventType != null && message.hasOwnProperty("eventType")) {
                                object.eventType = options.enums === String ? $root.com.alibaba.otter.canal.protocol.EventType[message.eventType] === undefined ? message.eventType : $root.com.alibaba.otter.canal.protocol.EventType[message.eventType] : message.eventType;
                                if (options.oneofs)
                                    object.eventTypePresent = "eventType";
                            }
                            if (message.isDdl != null && message.hasOwnProperty("isDdl")) {
                                object.isDdl = message.isDdl;
                                if (options.oneofs)
                                    object.isDdlPresent = "isDdl";
                            }
                            if (message.sql != null && message.hasOwnProperty("sql"))
                                object.sql = message.sql;
                            if (message.rowDatas && message.rowDatas.length) {
                                object.rowDatas = [];
                                for (var j = 0; j < message.rowDatas.length; ++j)
                                    object.rowDatas[j] = $root.com.alibaba.otter.canal.protocol.RowData.toObject(message.rowDatas[j], options);
                            }
                            if (message.props && message.props.length) {
                                object.props = [];
                                for (var j = 0; j < message.props.length; ++j)
                                    object.props[j] = $root.com.alibaba.otter.canal.protocol.Pair.toObject(message.props[j], options);
                            }
                            if (message.ddlSchemaName != null && message.hasOwnProperty("ddlSchemaName"))
                                object.ddlSchemaName = message.ddlSchemaName;
                            return object;
                        };

                        /**
                         * Converts this RowChange to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        RowChange.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for RowChange
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.RowChange
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        RowChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.RowChange";
                        };

                        return RowChange;
                    })();

                    protocol.TransactionBegin = (function() {

                        /**
                         * Properties of a TransactionBegin.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface ITransactionBegin
                         * @property {number|Long|null} [executeTime] 已废弃，请使用header里的executeTime*
                         * @property {string|null} [transactionId] 已废弃，Begin里不提供事务id*
                         * @property {Array.<com.alibaba.otter.canal.protocol.IPair>|null} [props] 预留扩展*
                         * @property {number|Long|null} [threadId] 执行的thread Id*
                         */

                        /**
                         * Constructs a new TransactionBegin.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc 开始事务的一些信息*
                         * @implements ITransactionBegin
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.ITransactionBegin=} [properties] Properties to set
                         */
                        function TransactionBegin(properties) {
                            this.props = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * 已废弃，请使用header里的executeTime*
                         * @member {number|Long} executeTime
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @instance
                         */
                        TransactionBegin.prototype.executeTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * 已废弃，Begin里不提供事务id*
                         * @member {string} transactionId
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @instance
                         */
                        TransactionBegin.prototype.transactionId = "";

                        /**
                         * 预留扩展*
                         * @member {Array.<com.alibaba.otter.canal.protocol.IPair>} props
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @instance
                         */
                        TransactionBegin.prototype.props = $util.emptyArray;

                        /**
                         * 执行的thread Id*
                         * @member {number|Long} threadId
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @instance
                         */
                        TransactionBegin.prototype.threadId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new TransactionBegin instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ITransactionBegin=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.TransactionBegin} TransactionBegin instance
                         */
                        TransactionBegin.create = function create(properties) {
                            return new TransactionBegin(properties);
                        };

                        /**
                         * Encodes the specified TransactionBegin message. Does not implicitly {@link com.alibaba.otter.canal.protocol.TransactionBegin.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ITransactionBegin} message TransactionBegin message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TransactionBegin.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.executeTime != null && Object.hasOwnProperty.call(message, "executeTime"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.executeTime);
                            if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.transactionId);
                            if (message.props != null && message.props.length)
                                for (var i = 0; i < message.props.length; ++i)
                                    $root.com.alibaba.otter.canal.protocol.Pair.encode(message.props[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.threadId != null && Object.hasOwnProperty.call(message, "threadId"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.threadId);
                            return writer;
                        };

                        /**
                         * Encodes the specified TransactionBegin message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.TransactionBegin.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ITransactionBegin} message TransactionBegin message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TransactionBegin.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a TransactionBegin message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.TransactionBegin} TransactionBegin
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TransactionBegin.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.TransactionBegin();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.executeTime = reader.int64();
                                        break;
                                    }
                                case 2: {
                                        message.transactionId = reader.string();
                                        break;
                                    }
                                case 3: {
                                        if (!(message.props && message.props.length))
                                            message.props = [];
                                        message.props.push($root.com.alibaba.otter.canal.protocol.Pair.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 4: {
                                        message.threadId = reader.int64();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a TransactionBegin message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.TransactionBegin} TransactionBegin
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TransactionBegin.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a TransactionBegin message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TransactionBegin.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.executeTime != null && message.hasOwnProperty("executeTime"))
                                if (!$util.isInteger(message.executeTime) && !(message.executeTime && $util.isInteger(message.executeTime.low) && $util.isInteger(message.executeTime.high)))
                                    return "executeTime: integer|Long expected";
                            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                                if (!$util.isString(message.transactionId))
                                    return "transactionId: string expected";
                            if (message.props != null && message.hasOwnProperty("props")) {
                                if (!Array.isArray(message.props))
                                    return "props: array expected";
                                for (var i = 0; i < message.props.length; ++i) {
                                    var error = $root.com.alibaba.otter.canal.protocol.Pair.verify(message.props[i]);
                                    if (error)
                                        return "props." + error;
                                }
                            }
                            if (message.threadId != null && message.hasOwnProperty("threadId"))
                                if (!$util.isInteger(message.threadId) && !(message.threadId && $util.isInteger(message.threadId.low) && $util.isInteger(message.threadId.high)))
                                    return "threadId: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a TransactionBegin message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.TransactionBegin} TransactionBegin
                         */
                        TransactionBegin.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.TransactionBegin)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.TransactionBegin();
                            if (object.executeTime != null)
                                if ($util.Long)
                                    (message.executeTime = $util.Long.fromValue(object.executeTime)).unsigned = false;
                                else if (typeof object.executeTime === "string")
                                    message.executeTime = parseInt(object.executeTime, 10);
                                else if (typeof object.executeTime === "number")
                                    message.executeTime = object.executeTime;
                                else if (typeof object.executeTime === "object")
                                    message.executeTime = new $util.LongBits(object.executeTime.low >>> 0, object.executeTime.high >>> 0).toNumber();
                            if (object.transactionId != null)
                                message.transactionId = String(object.transactionId);
                            if (object.props) {
                                if (!Array.isArray(object.props))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.TransactionBegin.props: array expected");
                                message.props = [];
                                for (var i = 0; i < object.props.length; ++i) {
                                    if (typeof object.props[i] !== "object")
                                        throw TypeError(".com.alibaba.otter.canal.protocol.TransactionBegin.props: object expected");
                                    message.props[i] = $root.com.alibaba.otter.canal.protocol.Pair.fromObject(object.props[i]);
                                }
                            }
                            if (object.threadId != null)
                                if ($util.Long)
                                    (message.threadId = $util.Long.fromValue(object.threadId)).unsigned = false;
                                else if (typeof object.threadId === "string")
                                    message.threadId = parseInt(object.threadId, 10);
                                else if (typeof object.threadId === "number")
                                    message.threadId = object.threadId;
                                else if (typeof object.threadId === "object")
                                    message.threadId = new $util.LongBits(object.threadId.low >>> 0, object.threadId.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a TransactionBegin message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.TransactionBegin} message TransactionBegin
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TransactionBegin.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.props = [];
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.executeTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.executeTime = options.longs === String ? "0" : 0;
                                object.transactionId = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.threadId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.threadId = options.longs === String ? "0" : 0;
                            }
                            if (message.executeTime != null && message.hasOwnProperty("executeTime"))
                                if (typeof message.executeTime === "number")
                                    object.executeTime = options.longs === String ? String(message.executeTime) : message.executeTime;
                                else
                                    object.executeTime = options.longs === String ? $util.Long.prototype.toString.call(message.executeTime) : options.longs === Number ? new $util.LongBits(message.executeTime.low >>> 0, message.executeTime.high >>> 0).toNumber() : message.executeTime;
                            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                                object.transactionId = message.transactionId;
                            if (message.props && message.props.length) {
                                object.props = [];
                                for (var j = 0; j < message.props.length; ++j)
                                    object.props[j] = $root.com.alibaba.otter.canal.protocol.Pair.toObject(message.props[j], options);
                            }
                            if (message.threadId != null && message.hasOwnProperty("threadId"))
                                if (typeof message.threadId === "number")
                                    object.threadId = options.longs === String ? String(message.threadId) : message.threadId;
                                else
                                    object.threadId = options.longs === String ? $util.Long.prototype.toString.call(message.threadId) : options.longs === Number ? new $util.LongBits(message.threadId.low >>> 0, message.threadId.high >>> 0).toNumber() : message.threadId;
                            return object;
                        };

                        /**
                         * Converts this TransactionBegin to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TransactionBegin.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for TransactionBegin
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.TransactionBegin
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        TransactionBegin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.TransactionBegin";
                        };

                        return TransactionBegin;
                    })();

                    protocol.TransactionEnd = (function() {

                        /**
                         * Properties of a TransactionEnd.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface ITransactionEnd
                         * @property {number|Long|null} [executeTime] 已废弃，请使用header里的executeTime*
                         * @property {string|null} [transactionId] 事务号*
                         * @property {Array.<com.alibaba.otter.canal.protocol.IPair>|null} [props] 预留扩展*
                         */

                        /**
                         * Constructs a new TransactionEnd.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc 结束事务的一些信息*
                         * @implements ITransactionEnd
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.ITransactionEnd=} [properties] Properties to set
                         */
                        function TransactionEnd(properties) {
                            this.props = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * 已废弃，请使用header里的executeTime*
                         * @member {number|Long} executeTime
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @instance
                         */
                        TransactionEnd.prototype.executeTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * 事务号*
                         * @member {string} transactionId
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @instance
                         */
                        TransactionEnd.prototype.transactionId = "";

                        /**
                         * 预留扩展*
                         * @member {Array.<com.alibaba.otter.canal.protocol.IPair>} props
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @instance
                         */
                        TransactionEnd.prototype.props = $util.emptyArray;

                        /**
                         * Creates a new TransactionEnd instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ITransactionEnd=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.TransactionEnd} TransactionEnd instance
                         */
                        TransactionEnd.create = function create(properties) {
                            return new TransactionEnd(properties);
                        };

                        /**
                         * Encodes the specified TransactionEnd message. Does not implicitly {@link com.alibaba.otter.canal.protocol.TransactionEnd.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ITransactionEnd} message TransactionEnd message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TransactionEnd.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.executeTime != null && Object.hasOwnProperty.call(message, "executeTime"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.executeTime);
                            if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.transactionId);
                            if (message.props != null && message.props.length)
                                for (var i = 0; i < message.props.length; ++i)
                                    $root.com.alibaba.otter.canal.protocol.Pair.encode(message.props[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified TransactionEnd message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.TransactionEnd.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.ITransactionEnd} message TransactionEnd message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TransactionEnd.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a TransactionEnd message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.TransactionEnd} TransactionEnd
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TransactionEnd.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.TransactionEnd();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.executeTime = reader.int64();
                                        break;
                                    }
                                case 2: {
                                        message.transactionId = reader.string();
                                        break;
                                    }
                                case 3: {
                                        if (!(message.props && message.props.length))
                                            message.props = [];
                                        message.props.push($root.com.alibaba.otter.canal.protocol.Pair.decode(reader, reader.uint32()));
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a TransactionEnd message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.TransactionEnd} TransactionEnd
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TransactionEnd.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a TransactionEnd message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TransactionEnd.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.executeTime != null && message.hasOwnProperty("executeTime"))
                                if (!$util.isInteger(message.executeTime) && !(message.executeTime && $util.isInteger(message.executeTime.low) && $util.isInteger(message.executeTime.high)))
                                    return "executeTime: integer|Long expected";
                            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                                if (!$util.isString(message.transactionId))
                                    return "transactionId: string expected";
                            if (message.props != null && message.hasOwnProperty("props")) {
                                if (!Array.isArray(message.props))
                                    return "props: array expected";
                                for (var i = 0; i < message.props.length; ++i) {
                                    var error = $root.com.alibaba.otter.canal.protocol.Pair.verify(message.props[i]);
                                    if (error)
                                        return "props." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a TransactionEnd message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.TransactionEnd} TransactionEnd
                         */
                        TransactionEnd.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.TransactionEnd)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.TransactionEnd();
                            if (object.executeTime != null)
                                if ($util.Long)
                                    (message.executeTime = $util.Long.fromValue(object.executeTime)).unsigned = false;
                                else if (typeof object.executeTime === "string")
                                    message.executeTime = parseInt(object.executeTime, 10);
                                else if (typeof object.executeTime === "number")
                                    message.executeTime = object.executeTime;
                                else if (typeof object.executeTime === "object")
                                    message.executeTime = new $util.LongBits(object.executeTime.low >>> 0, object.executeTime.high >>> 0).toNumber();
                            if (object.transactionId != null)
                                message.transactionId = String(object.transactionId);
                            if (object.props) {
                                if (!Array.isArray(object.props))
                                    throw TypeError(".com.alibaba.otter.canal.protocol.TransactionEnd.props: array expected");
                                message.props = [];
                                for (var i = 0; i < object.props.length; ++i) {
                                    if (typeof object.props[i] !== "object")
                                        throw TypeError(".com.alibaba.otter.canal.protocol.TransactionEnd.props: object expected");
                                    message.props[i] = $root.com.alibaba.otter.canal.protocol.Pair.fromObject(object.props[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a TransactionEnd message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.TransactionEnd} message TransactionEnd
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TransactionEnd.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.props = [];
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.executeTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.executeTime = options.longs === String ? "0" : 0;
                                object.transactionId = "";
                            }
                            if (message.executeTime != null && message.hasOwnProperty("executeTime"))
                                if (typeof message.executeTime === "number")
                                    object.executeTime = options.longs === String ? String(message.executeTime) : message.executeTime;
                                else
                                    object.executeTime = options.longs === String ? $util.Long.prototype.toString.call(message.executeTime) : options.longs === Number ? new $util.LongBits(message.executeTime.low >>> 0, message.executeTime.high >>> 0).toNumber() : message.executeTime;
                            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                                object.transactionId = message.transactionId;
                            if (message.props && message.props.length) {
                                object.props = [];
                                for (var j = 0; j < message.props.length; ++j)
                                    object.props[j] = $root.com.alibaba.otter.canal.protocol.Pair.toObject(message.props[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this TransactionEnd to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TransactionEnd.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for TransactionEnd
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.TransactionEnd
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        TransactionEnd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.TransactionEnd";
                        };

                        return TransactionEnd;
                    })();

                    protocol.Pair = (function() {

                        /**
                         * Properties of a Pair.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @interface IPair
                         * @property {string|null} [key] Pair key
                         * @property {string|null} [value] Pair value
                         */

                        /**
                         * Constructs a new Pair.
                         * @memberof com.alibaba.otter.canal.protocol
                         * @classdesc 预留扩展*
                         * @implements IPair
                         * @constructor
                         * @param {com.alibaba.otter.canal.protocol.IPair=} [properties] Properties to set
                         */
                        function Pair(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Pair key.
                         * @member {string} key
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @instance
                         */
                        Pair.prototype.key = "";

                        /**
                         * Pair value.
                         * @member {string} value
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @instance
                         */
                        Pair.prototype.value = "";

                        /**
                         * Creates a new Pair instance using the specified properties.
                         * @function create
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IPair=} [properties] Properties to set
                         * @returns {com.alibaba.otter.canal.protocol.Pair} Pair instance
                         */
                        Pair.create = function create(properties) {
                            return new Pair(properties);
                        };

                        /**
                         * Encodes the specified Pair message. Does not implicitly {@link com.alibaba.otter.canal.protocol.Pair.verify|verify} messages.
                         * @function encode
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IPair} message Pair message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Pair.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                            return writer;
                        };

                        /**
                         * Encodes the specified Pair message, length delimited. Does not implicitly {@link com.alibaba.otter.canal.protocol.Pair.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.IPair} message Pair message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Pair.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Pair message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.alibaba.otter.canal.protocol.Pair} Pair
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Pair.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.alibaba.otter.canal.protocol.Pair();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.key = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.value = reader.string();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Pair message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.alibaba.otter.canal.protocol.Pair} Pair
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Pair.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Pair message.
                         * @function verify
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Pair.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.key != null && message.hasOwnProperty("key"))
                                if (!$util.isString(message.key))
                                    return "key: string expected";
                            if (message.value != null && message.hasOwnProperty("value"))
                                if (!$util.isString(message.value))
                                    return "value: string expected";
                            return null;
                        };

                        /**
                         * Creates a Pair message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.alibaba.otter.canal.protocol.Pair} Pair
                         */
                        Pair.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.alibaba.otter.canal.protocol.Pair)
                                return object;
                            var message = new $root.com.alibaba.otter.canal.protocol.Pair();
                            if (object.key != null)
                                message.key = String(object.key);
                            if (object.value != null)
                                message.value = String(object.value);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Pair message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @static
                         * @param {com.alibaba.otter.canal.protocol.Pair} message Pair
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Pair.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.key = "";
                                object.value = "";
                            }
                            if (message.key != null && message.hasOwnProperty("key"))
                                object.key = message.key;
                            if (message.value != null && message.hasOwnProperty("value"))
                                object.value = message.value;
                            return object;
                        };

                        /**
                         * Converts this Pair to JSON.
                         * @function toJSON
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Pair.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Pair
                         * @function getTypeUrl
                         * @memberof com.alibaba.otter.canal.protocol.Pair
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Pair.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/com.alibaba.otter.canal.protocol.Pair";
                        };

                        return Pair;
                    })();

                    /**
                     * 打散后的事件类型，主要用于标识事务的开始，变更数据，结束*
                     * @name com.alibaba.otter.canal.protocol.EntryType
                     * @enum {number}
                     * @property {number} ENTRYTYPECOMPATIBLEPROTO2=0 ENTRYTYPECOMPATIBLEPROTO2 value
                     * @property {number} TRANSACTIONBEGIN=1 TRANSACTIONBEGIN value
                     * @property {number} ROWDATA=2 ROWDATA value
                     * @property {number} TRANSACTIONEND=3 TRANSACTIONEND value
                     * @property {number} HEARTBEAT=4 心跳类型，内部使用，外部暂不可见，可忽略 *
                     * @property {number} GTIDLOG=5 GTIDLOG value
                     */
                    protocol.EntryType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "ENTRYTYPECOMPATIBLEPROTO2"] = 0;
                        values[valuesById[1] = "TRANSACTIONBEGIN"] = 1;
                        values[valuesById[2] = "ROWDATA"] = 2;
                        values[valuesById[3] = "TRANSACTIONEND"] = 3;
                        values[valuesById[4] = "HEARTBEAT"] = 4;
                        values[valuesById[5] = "GTIDLOG"] = 5;
                        return values;
                    })();

                    /**
                     * 事件类型 *
                     * @name com.alibaba.otter.canal.protocol.EventType
                     * @enum {number}
                     * @property {number} EVENTTYPECOMPATIBLEPROTO2=0 EVENTTYPECOMPATIBLEPROTO2 value
                     * @property {number} INSERT=1 INSERT value
                     * @property {number} UPDATE=2 UPDATE value
                     * @property {number} DELETE=3 DELETE value
                     * @property {number} CREATE=4 CREATE value
                     * @property {number} ALTER=5 ALTER value
                     * @property {number} ERASE=6 ERASE value
                     * @property {number} QUERY=7 QUERY value
                     * @property {number} TRUNCATE=8 TRUNCATE value
                     * @property {number} RENAME=9 RENAME value
                     * @property {number} CINDEX=10 CREATE INDEX*
                     * @property {number} DINDEX=11 DINDEX value
                     * @property {number} GTID=12 GTID value
                     * @property {number} XACOMMIT=13 XA *
                     * @property {number} XAROLLBACK=14 XAROLLBACK value
                     * @property {number} MHEARTBEAT=15 MASTER HEARTBEAT *
                     */
                    protocol.EventType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "EVENTTYPECOMPATIBLEPROTO2"] = 0;
                        values[valuesById[1] = "INSERT"] = 1;
                        values[valuesById[2] = "UPDATE"] = 2;
                        values[valuesById[3] = "DELETE"] = 3;
                        values[valuesById[4] = "CREATE"] = 4;
                        values[valuesById[5] = "ALTER"] = 5;
                        values[valuesById[6] = "ERASE"] = 6;
                        values[valuesById[7] = "QUERY"] = 7;
                        values[valuesById[8] = "TRUNCATE"] = 8;
                        values[valuesById[9] = "RENAME"] = 9;
                        values[valuesById[10] = "CINDEX"] = 10;
                        values[valuesById[11] = "DINDEX"] = 11;
                        values[valuesById[12] = "GTID"] = 12;
                        values[valuesById[13] = "XACOMMIT"] = 13;
                        values[valuesById[14] = "XAROLLBACK"] = 14;
                        values[valuesById[15] = "MHEARTBEAT"] = 15;
                        return values;
                    })();

                    /**
                     * 数据库类型*
                     * @name com.alibaba.otter.canal.protocol.Type
                     * @enum {number}
                     * @property {number} TYPECOMPATIBLEPROTO2=0 TYPECOMPATIBLEPROTO2 value
                     * @property {number} ORACLE=1 ORACLE value
                     * @property {number} MYSQL=2 MYSQL value
                     * @property {number} PGSQL=3 PGSQL value
                     */
                    protocol.Type = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "TYPECOMPATIBLEPROTO2"] = 0;
                        values[valuesById[1] = "ORACLE"] = 1;
                        values[valuesById[2] = "MYSQL"] = 2;
                        values[valuesById[3] = "PGSQL"] = 3;
                        return values;
                    })();

                    return protocol;
                })();

                return canal;
            })();

            return otter;
        })();

        return alibaba;
    })();

    return com;
})();

module.exports = $root;
