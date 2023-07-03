const Dashboard = ({ user }) => {
  return (
    <section className='section dashboard'>
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
