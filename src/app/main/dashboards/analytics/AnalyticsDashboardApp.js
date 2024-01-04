import withReducer from 'app/store/withReducer';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import reducer from './store';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import AnalyticsDashboardAppHeader from './AnalyticsDashboardAppHeader';
import ProjectsWidget from './widgets/ProjectsWidget';
import EarningsWidget from './widgets/EarningsWidget';
import ClientsWidget from './widgets/ClientsWidget';
import ProjectsChartWidget from './widgets/ProjectsChartWidget';
import ClientsVsFreelancersWidget from './widgets/UsersWidget';
import AgeWidget from './widgets/AgeWidget';
import LanguageWidget from './widgets/LanguageWidget';
import OpenProjectsWidget from './widgets/OpenProjectsWidget';

function AnalyticsDashboardApp() {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);

  return (
    <FusePageSimple
      header={<AnalyticsDashboardAppHeader />}
      content={
        <>
          {useMemo(() => {
            const container = {
              show: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            };

            const item = {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            };

            return (
              !_.isEmpty(widgets) && (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
                    <ProjectsWidget />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
                    <EarningsWidget />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
                    <ClientsWidget />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-3">
                    <ProjectsChartWidget />
                  </motion.div>
                  
                  <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 w-full">
                    <motion.div variants={item} className="">
                      <ClientsVsFreelancersWidget />
                    </motion.div>
                    <motion.div variants={item} className="">
                      <OpenProjectsWidget />
                    </motion.div>
                    <motion.div variants={item} className="">
                      <AgeWidget />
                    </motion.div>
                    <motion.div variants={item} className="">
                      <LanguageWidget />
                    </motion.div>
                  </div>
                </motion.div>
              )
            );
          }, [widgets])}
        </>
      }
    />
  );
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
