import { ForwardedRef, forwardRef, memo } from "react";
import styles from "./Textarea.module.scss";
import cn from "classnames";
import { TextareaProps } from "./Textarea.props";

const Textarea = memo(
    forwardRef(
        (
            { className, error, ...props }: TextareaProps,
            ref: ForwardedRef<HTMLTextAreaElement>
        ): JSX.Element => {
            return (
                <div className={cn(styles.textareaWrapper, className)}>
                    <textarea
                        className={cn(styles.textarea, {
                            [styles.error]: error,
                        })}
                        ref={ref}
                        {...props}
                    />
                    {error && (
                        <span role="alert" className={styles.errorMessage}>
                            {error.message}
                        </span>
                    )}
                </div>
            );
        }
    )
);

export default Textarea;
