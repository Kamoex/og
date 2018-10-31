import * as $protobuf from "protobufjs";
/** Namespace lm. */
export namespace lm {

    /** Properties of a helloword. */
    interface Ihelloword {

        /** helloword id */
        id: number;

        /** helloword str */
        str: string;

        /** helloword opt */
        opt?: (number|null);
    }

    /** Represents a helloword. */
    class helloword implements Ihelloword {

        /**
         * Constructs a new helloword.
         * @param [properties] Properties to set
         */
        constructor(properties?: lm.Ihelloword);

        /** helloword id. */
        public id: number;

        /** helloword str. */
        public str: string;

        /** helloword opt. */
        public opt: number;

        /**
         * Creates a new helloword instance using the specified properties.
         * @param [properties] Properties to set
         * @returns helloword instance
         */
        public static create(properties?: lm.Ihelloword): lm.helloword;

        /**
         * Encodes the specified helloword message. Does not implicitly {@link lm.helloword.verify|verify} messages.
         * @param message helloword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lm.Ihelloword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified helloword message, length delimited. Does not implicitly {@link lm.helloword.verify|verify} messages.
         * @param message helloword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lm.Ihelloword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a helloword message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns helloword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lm.helloword;

        /**
         * Decodes a helloword message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns helloword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lm.helloword;

        /**
         * Verifies a helloword message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a helloword message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns helloword
         */
        public static fromObject(object: { [k: string]: any }): lm.helloword;

        /**
         * Creates a plain object from a helloword message. Also converts values to other types if specified.
         * @param message helloword
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lm.helloword, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this helloword to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
