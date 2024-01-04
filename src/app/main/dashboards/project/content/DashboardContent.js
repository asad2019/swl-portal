import { motion } from 'framer-motion';
import ClientsWidget from './widgets/ClientsWidget';
import FreelancersWidget from './widgets/FreelancersWidget';
import ProjectManagersWidget from './widgets/ProjectManagersWidget';
import StatsWidget from './widgets/StatsWidget';
import ProjectsWidget from './widgets/ProjectsWidget';

function DashboardContent() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <ProjectsWidget />
      </motion.div>
      <motion.div variants={item}>
        <ClientsWidget />
      </motion.div>
      <motion.div variants={item}>
        <FreelancersWidget />
      </motion.div>
      <motion.div variants={item}>
        <ProjectManagersWidget />
      </motion.div>
      <motion.div variants={item} className="sm:col-span-2 md:col-span-4">
        <StatsWidget />
      </motion.div>
    </motion.div>
  );
}

export default DashboardContent;
