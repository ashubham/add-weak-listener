/**
 * Weak Event listener
 * Mostly based on https://v8.dev/features/weak-references
 */

const gListenersRegistry = new FinalizationRegistry(
  ({ target, eventName, wrapper, options }: any) => {
    target.removeEventListener(eventName, wrapper, options);
  }
);
/**
 * The interface is congruent with addEventListener. The Listener
 * is not prevented from being garbage collected.
 *
 * @param target EventTarget Target on which the handler would be added.
 * @param type string The event type name
 * @param listener The callback
 * @param options  The AddEventListenerOptions
 */
export function addWeakListener(
  target: EventTarget,
  type: string,
  listener: (evt: Event) => void,
  options?: boolean | AddEventListenerOptions
) {
  const weakRef = new WeakRef(listener);
  const wrapper = (ev: Event) => {
    weakRef.deref()?.(ev);
  };
  gListenersRegistry.register(listener, { target, type, wrapper, options });
  target.addEventListener(type, wrapper, options);
}
