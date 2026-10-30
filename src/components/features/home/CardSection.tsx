import { StackCards } from "@/components/features/home/StackCards";

export const CardSection = () => {
  return (
    <div className="c-numbers-stack">
      <div className="container">
        <div className="grid grid-cols-6 gap-gutter md:grid-cols-16">
          <div className="col-span-full md:col-start-2 md:col-span-14">
            <div className="c-numbers-stack_grid">
              <div className="c-numbers-stack_content">
                <div className="c-numbers-stack_content_sticky">
                  <h2
                    className="c-numbers-stack_title is-inview"
                    style={
                      {
                        "--accent-color": "var(--color-pink-500)",
                      } as React.CSSProperties
                    }
                  >
                    <p>
                      A few numbers behind the <strong>insights</strong> we
                      deliver
                    </p>
                  </h2>
                  <div>
                    <p className="c-numbers-stack_text body-md">
                      These numbers are more than just milestones. They
                      represent the strength of our connections, the consistency
                      of our work, and the real-world impact we help create for
                      you.
                    </p>
                  </div>
                </div>
              </div>
              <StackCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
