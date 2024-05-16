"use client"
import Link from "next/link"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ResponsiveLine } from "@nivo/line"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Component() {
  return (
    (<div className="bg-gray-200 grid grid-cols-2 grid-rows-2 gap-6 h-full">
      <div className="bg-white rounded-lg shadow-md p-6 m-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Recent Orders</h2>
          <Link className="text-blue-500 hover:text-blue-600" href="#">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>INV001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>2023-05-01</TableCell>
                <TableCell>$99.99</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>INV002</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>2023-05-02</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>INV003</TableCell>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>2023-05-03</TableCell>
                <TableCell>$79.99</TableCell>
                <TableCell>Shipped</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 m-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Sales Overview</h2>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost">
              Last 7 Days
            </Button>
            <Button size="sm" variant="ghost">
              Last 30 Days
            </Button>
            <Button size="sm" variant="ghost">
              Last Year
            </Button>
          </div>
        </div>
        <LineChart className="aspect-[4/3]" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 m-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Support Messages</h2>
          <Link className="text-blue-500 hover:text-blue-600" href="#">
            View All
          </Link>
        </div>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <img
                alt="User Avatar"
                className="rounded-full"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40} />
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-gray-500">Hi, I'm having trouble with the checkout process. Can you help?</p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                alt="User Avatar"
                className="rounded-full"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40} />
              <div>
                <h3 className="font-medium">Jane Smith</h3>
                <p className="text-gray-500">I love your product! It's been a game-changer for my business.</p>
                <p className="text-gray-500 text-sm">1 day ago</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 m-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Connected Devices</h2>
          <Link className="text-blue-500 hover:text-blue-600" href="#">
            View All
          </Link>
        </div>
        <ScrollArea className="h-[300px]">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-6 h-6 text-gray-500" />
                <span>iPhone 12</span>
              </div>
              <Button size="sm" variant="ghost">
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-6 h-6 text-gray-500" />
                <span>MacBook Pro</span>
              </div>
              <Button size="sm" variant="ghost">
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-6 h-6 text-gray-500" />
                <span>iPad Air</span>
              </div>
              <Button size="sm" variant="ghost">
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>)
  );
}

function ChevronRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}


function LineChart(props) {
  return (
    (<div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application" />
    </div>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}
