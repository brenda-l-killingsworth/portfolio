import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ga, skeleton } from '../../helpers/utils';

const displaySection = (skillsShowcase) => {
  if (
    skillsShowcase &&
    Array.isArray(skillsShowcase) &&
    skillsShowcase.length
  ) {
    return true;
  } else {
    return false;
  }
};

const SkillsShowcase = ({ skillsShowcase, loading, googleAnalytics }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < skillsShowcase.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: 'w-32',
                        height: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-20 h-20 mask mask-squircle mx-auto">
                        {skeleton({
                          width: 'w-full',
                          height: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderSkillsShowcase = () => {
    return skillsShowcase.map((item, index) => (
      <div
        className="card shadow-lg compact bg-base-100"
        key={index}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90">
                      <div className="w-20 h-20 mask mask-squircle">
                        {item.imageUrl} {/* You can customize the image display */}
                      </div>
                    </div>
                  )}
                  <p className="mt-1 text-base-content text-opacity-60 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      {displaySection(skillsShowcase) && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 shadow bg-opacity-40">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          Skills Showcase
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {loading ? renderSkeleton() : renderSkillsShowcase()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

SkillsShowcase.propTypes = {
  skillsShowcase: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
};

export default SkillsShowcase;