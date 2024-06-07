import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCar, FaDollarSign, FaProductHunt, FaUsers } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: revenueData = {} } = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-states");
      return res.data;
    },
  });
  const { data: chartData = [] } = useQuery({
    queryKey: ["chart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-states");
      return res.data;
    },
  });

  // CUstom shape Bar Chart
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  // custom pic chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const pieChartData = chartData.map((item) => {
    return { name: item.category, value: item.revenue };
  });
  return (
    <div>
      <div>
        <h1>
          Hello, Wellcome beck{" "}
          <span className="uppercase font-semibold text-xl text-slate-800">
            {" "}
            {user?.displayName}{" "}
          </span>{" "}
        </h1>
        <div>
          <div className="stats my-5 shadow">
            <div className="stat flex items-center">
              <div>
                <FaDollarSign className="text-4xl"></FaDollarSign>
              </div>
              <div>
                <p className="stat-value"> {revenueData?.revenue} </p>
                <p className="stat-title">Revenue</p>
              </div>
            </div>

            <div className="stat flex items-center">
              <div>
                <FaUsers className="text-4xl"> </FaUsers>
              </div>
              <div>
                <p className="stat-value">{revenueData?.estimateUser} </p>
                <p className="stat-title">Users</p>
              </div>
            </div>

            <div className="stat flex items-center">
              <div>
                <FaProductHunt className="text-4xl"></FaProductHunt>
              </div>
              <div>
                <p className="stat-value"> {revenueData?.estimateItem} </p>
                <p className="stat-title">Products</p>
              </div>
            </div>
            <div className="stat flex items-center">
              <div>
                <FaCar className="text-4xl"> </FaCar>
              </div>
              <div>
                <p className="stat-value"> {revenueData?.estimaOrder} </p>
                <p className="stat-title">Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex">
        {/* Custom shape bar chart */}
        <div className="md:w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="revenue"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
            <Tooltip> </Tooltip>
              <Legend></Legend>
          </BarChart>
        </div>

        <div className="md:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            <Tooltip> </Tooltip>
              <Legend></Legend>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
