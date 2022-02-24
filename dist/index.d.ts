/**
 * Weak Event listener
 * Mostly based on https://v8.dev/features/weak-references
 */
/**
 * The interface is congruent with addEventListener. The Listener
 * is not prevented from being garbage collected.
 *
 * @param target EventTarget Target on which the handler would be added.
 * @param type string The event type name
 * @param listener The callback
 * @param options  The AddEventListenerOptions
 */
export declare function addWeakListener(target: EventTarget, type: string, listener: (evt: Event) => void, options?: boolean | AddEventListenerOptions): void;
export default addWeakListener;
//# sourceMappingURL=index.d.ts.map